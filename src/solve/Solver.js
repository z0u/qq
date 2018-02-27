import MobileStep from './MobileStep';
import SolverStep from './SolverStep';
import { has } from '../arrays';

export default class Solver {
  constructor(stepSize) {
    this.stepSize = stepSize;
    this.arrivalRules = {};
    this.serviceRules = {};
    this.targetRules = {};
  }

  addArrivalRule(characteristic, sampler, demandFactory) {
    this.arrivalRules[characteristic] = {
      sampler: sampler,
      demandFactory: demandFactory,
    };
    return this;
  }

  addServiceRule(characteristic, rule) {
    this.serviceRules[characteristic] = rule;
    return this;
  }

  addTargetRule(characteristic, rule) {
    this.targetRules[characteristic] = rule;
    return this;
  }

  initialize(model, histories) {
    histories.add({
      nWaiting: 'Waiting',
      nServing: 'Serving',
      nClients: 'Clients',
      arrivalRate: 'Arrival rate',
    });
  }

  step(model, histories) {
    if (model.time < model.startTime)
      model.time = model.startTime;
    else
      model.time += this.stepSize;
    model.tick += 1;
    // console.info(`Time step ${model.tick}`);
    const arrivals = this.stepFlow(model);
    this.stepMobile(model);
    this.gatherStats(model, histories, arrivals);
    return model;
  }

  stepFlow(model) {
    // TODO: This only needs to be done if the graph topology changes
    // console.log('------- STEP ------');
    const downstreamServiceMap = this.collateDownstreamServices(model);
    const visitor = new SolverStep(
      this.stepSize, model.time,
      this.arrivalRules, this.serviceRules,
      downstreamServiceMap,
    );
    model.walk(visitor);
    return visitor.arrivals;
  }

  collateDownstreamServices(model) {
    const downstreamServiceMap = {};
    const visitor = {
      visitNode: (node) => {
        const downstreamServices = new Set();
        const rule = this.serviceRules[node.serviceCharacteristic];
        if (rule) {
          Object.keys(rule).forEach((name) => downstreamServices.add(name));
        }
        for (const output of node.outputs) {
          if (!output.open) {
            continue;
          }
          for (const name of downstreamServiceMap[output.key]) {
            downstreamServices.add(name);
          }
        }
        downstreamServiceMap[node.key] = downstreamServices;
      },
    };
    model.walk(visitor);
    return downstreamServiceMap;
  }

  stepMobile(model) {
    const queues = model.filter({ visitQueue: () => true });
    const visitor = new MobileStep(this.stepSize, model.time, this.targetRules, queues);
    model.walk(visitor);
  }

  gatherStats(model, histories, arrivals) {
    const stats = {
      nWaiting: 0,
      nServing: 0,
      nClients: 0,
      arrivalRate: arrivals * (1 / this.stepSize) * 60,
    };
    const visitor = {
      visitServer: (server) => {
        if (server.client) {
          stats.nServing += 1;
          stats.nClients += 1;
        }
      },
      visitQueue: (queue) => {
        stats.nClients += queue.clients.length;
        if (has(queue.tags, 'waiting'))
          stats.nWaiting += queue.clients.length;
      },
    };
    model.walk(visitor);
    histories.push(model.time, stats);
  }
}
