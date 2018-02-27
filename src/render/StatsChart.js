import * as d3 from 'd3';

export default class StatsChart {
  constructor(rootSelector, filterBy) {
    this.rootSelector = rootSelector;
    this.filterBy = filterBy;
    const svg = d3.select(this.rootSelector);
    svg.selectAll('*').remove();
    svg.append('g')
      .attr('class', 'axis x-axis');
    svg.append('g')
      .attr('class', 'axis y-axis');
    svg.append('g')
      .attr('class', 'lines');
    this.paddingTop = 5;
    this.paddingBottom = 20;
    this.paddingLeft = 30;
    this.paddingRight = 20;
  }

  draw(model, histories) {
    const svg = d3.select(this.rootSelector);
    const scales = this.getScales(svg, model, histories);
    this.drawAxes(svg, scales);
    this.drawLines(svg, scales, histories);
  }

  getScales(svg, model, histories) {
    const svgBbox = svg.node().getBoundingClientRect();
    return {
      x: d3.scaleUtc()
        .domain([model.startTime * 1000, model.endTime * 1000])
        .nice()
        .range([0, svgBbox.width - (this.paddingLeft + this.paddingRight)]),
      y: d3.scaleLinear()
        .domain(histories.toRange(this.filterBy).toArray())
        .nice()
        .range([svgBbox.height - (this.paddingTop + this.paddingBottom), 0]),
    };
  }

  drawAxes(svg, scales) {
    const svgBbox = svg.node().getBoundingClientRect();
    svg.selectAll('g.x-axis')
      .attr(
        'transform',
        'translate(' + this.paddingLeft + ', ' + (svgBbox.height - this.paddingBottom) + ')')
      .call(d3.axisBottom(scales.x).ticks(5));
    svg.selectAll('g.y-axis')
      .attr(
        'transform',
        'translate(' + this.paddingLeft + ', ' + this.paddingTop + ')')
      .call(d3.axisLeft(scales.y).ticks(2));
  }

  drawLines(svg, scales, histories) {
    const line = d3.line()
      .x(d => scales.x(d.x * 1000))
      .y(d => scales.y(d.y))
      // .curve(d3.curveStep)
    ;
    svg.selectAll('g.lines')
      .attr(
        'transform',
        'translate(' + this.paddingLeft + ', ' + this.paddingTop + ')')
      .selectAll('path')
      .data(histories.toSeries(this.filterBy))
      .attr('d', line)
      .enter()
      .append('path')
    ;
  }
}
