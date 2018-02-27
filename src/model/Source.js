import Server from './Server';

export default class Source extends Server {
  constructor() {
    super();
    this.addTags('source');
    this.arrivalCharacteristic = 'standard';
  }

  accept(visitor, depth) {
    visitor.visitSource && visitor.visitSource(this, depth);
    Server.prototype.accept.call(this, visitor, depth);
  }

  withInput() {
    throw "Sources can't have input queues.";
  }

  withArrivalCharacteristic(name) {
    this.arrivalCharacteristic = name;
    return this;
  }

  toString() {
    return `Source(${this.label || this.tags})`;
  }
}
