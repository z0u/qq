import NamedObject from './NamedObject';

export default class Client extends NamedObject {
  constructor(name, arrivalTime, jitter) {
    super();
    this.name = name;
    this.addTags('client');
    this.arrivalTime = arrivalTime;
    this.jitter = jitter;
    this.demands = {};
    this.initialDemands = {};
    this.serverKey = null;
    this.queueKey = null;
  }

  withDemands(demands) {
    this.demands = demands;
    this.initialDemands = { ...demands };
    return this;
  }

  toString() {
    return `${this.name}`;
  }
}
