import * as d3 from 'd3';
import { formatDuration } from '../time';

/**
 * Pseudo-spatial visualisation, where queues are displayed as columns. Only
 * works for models where each server has at most one input queue.
 */
export default class ColumnVis {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
    const svg = d3.select(this.rootSelector);
    svg.selectAll('*').remove();
    svg.append('g')
      .attr('class', 'clusters');
    svg.append('g')
      .attr('class', 'mobile-servers');
    svg.append('g')
      .attr('class', 'timeline');
    svg.append('g')
      .attr('class', 'stats');
  }

  draw(model) {
    const svg = d3.select(this.rootSelector);
    this.drawModel(svg, model);
    this.drawTimeline(svg, model);
  }

  drawTimeline(svg, model) {
    const svgBbox = svg.node().getBoundingClientRect();
    svg.select('g.timeline').selectAll('text')
      .data([{
        time: model.time,
      }])
      .text(() => formatDuration(model.time))
      .style('text-anchor', 'middle')
      .attr('x', svgBbox.width / 2)
      .attr('y', (d, i) => 20 + i * 20)
      .enter()
      .append('text')
      .attr('class', 'timeline-text')
    ;
  }

  groupServers(model) {
    const clusters = {};
    const orderedClusters = [];
    model.walk({
      visitServer: (server) => {
        if (server.inputs.length !== 1)
          return;
        const queueKey = server.inputs[0].key;
        let cluster = clusters[queueKey];
        if (!cluster) {
          const queue = server.inputs[0];
          cluster = {
            queue,
            label: '',
            servers: [],
            indexOffset: 0,
            open: false,
          };
          clusters[queueKey] = cluster;
          orderedClusters.push(cluster);
        }
        cluster.label = server.label || cluster.label;
        cluster.open = server.open || cluster.open;
        cluster.servers.push(server);
      },
    });
    orderedClusters.reverse();
    return orderedClusters;
  }

  getMobileServers(model) {
    return model.filter({ visitMobileServer: () => true });
  }

  applyOffsets(clusters) {
    let index = 0;
    clusters.forEach((cluster) => {
      cluster.indexOffset = index;
      index += cluster.servers.length;
    });
    return index;
  }

  drawModel(svg, model) {
    const svgBbox = svg.node().getBoundingClientRect();
    const clusters = this.groupServers(model);
    const mobileServers = this.getMobileServers(model);
    const nServers = this.applyOffsets(clusters);
    const unitWidthPx = svgBbox.width / nServers;
    const clientGeom = {
      width: () => unitWidthPx - 10,
      height: () => 20,
    };
    const serviceAreaGeom = {
      top: d => svgBbox.height - (clientGeom.height(d) + 35 + 10),
      height: d => clientGeom.height(d) + 35,
      width: d => d.servers.length * unitWidthPx,
    };

    const { cluster, clusterEnter } = this.drawServerClusters(svg, unitWidthPx, clusters);
    const serviceArea = this.drawServiceAreas(serviceAreaGeom, cluster, clusterEnter);
    const server = this.drawServers(serviceAreaGeom, unitWidthPx, serviceArea);
    this.drawAttendedClients(clientGeom, serviceAreaGeom, server);
    const queue = this.drawQueues(serviceAreaGeom, cluster, clusterEnter);
    this.drawQueueingClients(clientGeom, serviceAreaGeom, queue);
    this.drawMobileServers(svg, clientGeom, mobileServers);
  }

  drawServerClusters(svg, unitWidthPx, clusters) {
    const cluster = svg
      .select('g.clusters')
      .selectAll('g.cluster')
      .data(clusters, d => d.queue.key)
    ;
    cluster.exit().remove();
    const clusterEnter = cluster
      .enter()
      .append('g')
    ;
    cluster
      .merge(clusterEnter)
      .attr('class', d => `cluster ${d.open ? 'open' : 'closed'}`)
      .attr('transform', d => `translate(${(d.indexOffset * unitWidthPx)})`)
    ;
    return { cluster, clusterEnter };
  }

  drawServiceAreas(serviceAreaGeom, cluster, clusterEnter) {
    const enter = clusterEnter
      .append('g')
      .attr('class', 'service-area')
    ;
    enter
      .append('rect')
      .attr('x', 2)
      .attr('rx', 4)
      .attr('ry', 4)
    ;
    enter
      .append('text')
      .style('text-anchor', 'middle')
      .text(d => d.label)
    ;

    const serviceArea = cluster.select('g.service-area');

    serviceArea.merge(enter)
      .attr('transform', d => `translate(0, ${serviceAreaGeom.top(d)})`)
    ;
    serviceArea.select('rect')
      .attr('width', d => serviceAreaGeom.width(d) - 4)
      .attr('height', serviceAreaGeom.height)
    ;
    serviceArea.select('text')
      .attr('x', d => serviceAreaGeom.width(d) / 2)
      .attr('y', 20)
      .style('text-anchor', 'middle')
      .text(d => d.label)
    ;

    return serviceArea;
  }

  drawServers(serviceAreaGeom, unitWidthPx, serviceArea) {
    const server = serviceArea
      .selectAll('g.server')
      .data(d => d.servers ? d.servers : [d])
    ;
    server.exit().remove();
    const serverEnter = server
      .enter()
      .append('g')
      .attr('class', 'server')
    ;
    server
      .merge(serverEnter)
      .attr('transform', (d, i) => `translate(${i * unitWidthPx}, 0)`)
    ;

    return server;
  }

  drawAttendedClients(clientGeom, serviceAreaGeom, server) {
    const client = server
      .selectAll('g.client')
      .data(d => [d.client || {}], d => d ? d.key : null)
    ;
    this.parameterizeClient(clientGeom, client, (d, i, nodes) => {
      const server = d3.select(nodes[i].parentNode).datum();
      const y = serviceAreaGeom.height(server) - clientGeom.height() - 3;
      return `translate(5, ${y})`;
    });
  }

  drawQueues(serviceAreaGeom, cluster, clusterEnter) {
    const queueEnter = clusterEnter
      .append('g')
      .attr('class', 'queue')
    ;
    queueEnter
      .append('line')
    ;

    const queue = cluster.select('g.queue');
    queue.select('line')
      .attr('y1', 0)
      .attr('y2', serviceAreaGeom.top)
      .attr('x1', d => serviceAreaGeom.width(d) / 2)
      .attr('x2', d => serviceAreaGeom.width(d) / 2)
    ;
    return queue;
  }

  drawQueueingClients(clientGeom, serviceAreaGeom, queue) {
    const client = queue
      .selectAll('g.client')
      .data(d => d.queue.clients, d => d.key)
    ;
    this.parameterizeClient(clientGeom, client, (d, i, nodes) => {
      const server = d3.select(nodes[i].parentNode).datum();
      let x = serviceAreaGeom.width(server) / 2 - (clientGeom.width() / 2);
      x += d.jitter * 3;
      const y = serviceAreaGeom.top(server) - ((clientGeom.height() + 4) * (i + 1));
      return `translate(${x}, ${y})`;
    });
  }

  clientKeyToId(key) {
    return `col-client-${key}`;
  }

  parameterizeClient(clientGeom, base, transform) {
    const enter = base
      .enter()
      .append('g')
      .attr('class', 'client')
      .attr('id', d => this.clientKeyToId(d.key))
    ;
    base.exit().remove();
    base
      .merge(enter)
      .attr('transform', transform)
      .attr('class', d => `client ${d.key ? '' : 'vacant'}`)
    ;
    enter
      .append('rect')
      .attr('rx', 3)
      .attr('ry', 3)
    ;
    base.merge(enter).select('rect')
      .attr('width', clientGeom.width)
      .attr('height', clientGeom.height)
    ;
    enter
      .append('text')
      .text((d) => d.name)
      .style('text-anchor', 'middle')
      .attr('y', 12)
    ;
    enter
      .append('rect')
      .attr('class', 'progress')
      .attr('x', 1)
      .attr('y', d => clientGeom.height(d) - 5)
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('height', 4)
      .style('text-anchor', 'middle')
    ;
    base.merge(enter).select('text')
      .attr('x', d => clientGeom.width(d) / 2)
    ;
    base.merge(enter).select('rect.progress')
      .attr('width', d => {
        if (!d.demands)
          return null;
        const initialDemands = Object.keys(d.initialDemands)
          .map((key) => d.initialDemands[key])
          .reduce((a, b) => a + b, 0);
        const demands = Object.keys(d.demands)
          .map((key) => d.demands[key])
          .reduce((a, b) => a + b, 0);
        const fraction = initialDemands ? demands / initialDemands : 0;
        return fraction * (clientGeom.width(d) - 2);
      })
    ;
  }

  drawMobileServers(svg, clientGeom, mobileServers) {
    const server = svg
      .select('g.mobile-servers')
      .selectAll('g.mobile-server')
      .data(mobileServers, d => d.key)
    ;
    server.exit().remove();
    const serverEnter = server
      .enter()
      .append('g')
      .attr('class', 'mobile-server')
    ;
    serverEnter
      .append('rect')
      .attr('rx', 4)
      .attr('ry', 4)
    ;
    const svgBbox = svg.node().getBoundingClientRect();
    server
      .merge(serverEnter)
      .attr('class', d => d.client ? 'mobile-server busy' : 'mobile-server idle')
      .attr('transform', d => {
        if (!d.client)
          return null;
        const clientNode = svg.select(`#${this.clientKeyToId(d.client.key)}`).node();
        const bounds = clientNode.getBoundingClientRect();
        return `translate(${bounds.left - svgBbox.left - 2}, ${bounds.top - svgBbox.top - 2})`;
      })
    ;
    server.select('rect')
      .attr('width', (d) => clientGeom.width(d) + 4)
      .attr('height', (d) => clientGeom.height(d) + 4)
    ;
  }
}
