import Server from './Server';

export default class MobileServer extends Server {
  constructor() {
    super();
    this.addTags('mobile');
    this.targetCharacteristic = 'standard';
  }

  accept(visitor, depth) {
    visitor.visitMobileServer && visitor.visitMobileServer(this, depth);
    Server.prototype.accept.call(this, visitor, depth);
  }

  withInput() {
    throw "Mobile servers can't connect directly to queues.";
  }

  withOutput() {
    throw "Mobile servers can't connect directly to queues.";
  }

  withTargetCharacteristic(name) {
    this.targetCharacteristic = name;
    return this;
  }

  toString() {
    return `MobileServer(${this.label || this.tags})`;
  }
}
