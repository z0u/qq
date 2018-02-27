import QNode from './QNode';

export default class Server extends QNode {
  constructor() {
    super();
    this.addTags('server');
    this.client = null;
    this.lastFetchedFrom = 0;
    this.lastPushedTo = 0;
    this.serviceCharacteristic = null;
  }

  withServiceCharacteristic(name) {
    this.serviceCharacteristic = name;
    return this;
  }

  getCapacity() {
    return 1;
  }

  isOpen() {
    return this.open;
  }

  pushClient(client) {
    if (this.client)
      throw new Error('Server is busy');
    this.client = client;
    client.serverKey = this.key;
  }

  popClient() {
    const client = this.client;
    this.client = null;
    client.serverKey = null;
    return client;
  }

  accept(visitor, depth) {
    visitor.visitServer && visitor.visitServer(this, depth);
    QNode.prototype.accept.call(this, visitor, depth);
  }

  toString() {
    return `Server(${this.label || this.tags})`;
  }

}
