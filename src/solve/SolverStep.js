import { allDe, allEn, allEs, allFr, allIt } from 'people-names';
import seedrandom from 'seedrandom';

import Client from '../model/Client';
import { getNormalized, roundRobin } from '../arrays';

const allNames = [
  ...allDe,
  ...allEn,
  ...allEs,
  ...allFr,
  ...allIt,
];

export default class SolverStep {
  constructor(
    stepSize, time,
    arrivalRules, serviceRules, downstreamServiceMap,
  ) {
    this.stepSize = stepSize;
    this.time = time;
    this.arrivalRules = arrivalRules;
    this.serviceRules = serviceRules;
    this.downstreamServiceMap = downstreamServiceMap;
    this.random = seedrandom(`${time}`);
    this.arrivals = 0;
  }

  visitSource(source) {
    if (source.client)
      return;
    const time = this.time;
    const arrivalCharacteristic = this.arrivalRules[
      source.arrivalCharacteristic];
    const rate = arrivalCharacteristic.sampler(time) * this.stepSize;
    if (this.random() < 1.0 - rate)
      return;
    const name = getNormalized(allNames, this.random());
    const client = new Client(name, time, this.random())
      .withDemands(arrivalCharacteristic.demandFactory());
    source.pushClient(client);
    this.arrivals += 1;
    // console.info(`Arrival: ${source.client} at ${source}`);
  }

  visitSink(sink) {
    if (!sink.client)
      return;
    // console.info(`Departure: ${sink.client} from ${sink}`);
    sink.popClient();
  }

  visitServer(server) {
    if (!server.client) {
      server.lastFetchedFrom = roundRobin(server.inputs, server.lastFetchedFrom, (queue) => {
        if (!queue.canYeild(this.time))
          return false;
        const client = queue.popClient(this.time);
        server.client = client;
        // console.info(`${server} beginning to serve ${server.client}`);
        return true;
      });
    }
    if (!server.client)
      return;

    // console.info(`${server} serving ${server.client}`);
    const complete = this.processDemands(server);
    if (complete && server.outputs.length) {
      const unmetDemands = Object.keys(server.client.demands)
        .filter(demand => !!server.client.demands[demand]);
      const targetQueue = server.outputs
        .filter(queue => queue.hasCapacity())
        .filter(queue => {
          const downstreamServices = this.downstreamServiceMap[queue.key];

          for (let i = 0; i < unmetDemands.length; i++) {
            const demand = unmetDemands[i];
            if (!downstreamServices.has(demand))
              return false;
          }
          return true;
        })
        .reduce((a, b) => a && a.clients.length < b.clients.length ? a : b, null);
      if (targetQueue) {
        // console.info(`${server} finished serving ${server.client}`);
        const client = server.popClient(this.time);
        targetQueue.pushClient(client, this.time);
      }
    }
  }

  processDemands(server) {
    const services = this.serviceRules[server.serviceCharacteristic];
    let satisfied = true;
    const demands = server.client.demands;
    for (const name in services) {
      if (demands[name] > 0 && services[name]) {
        satisfied = false;
        demands[name] -= services[name].rate * this.stepSize;
        if (demands[name] < 0)
          demands[name] = 0;
        break;
      }
    }
    return satisfied;
  }

  visitQueue(/* queue */) {
    // console.info(`${queue.clients.length} waiting in ${queue}`);
  }
}
