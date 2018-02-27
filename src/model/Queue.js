import QNode from './QNode';
import {
  push,
  pop,
} from '../arrays';

export default class Queue extends QNode {
  constructor(throttle, capacity) {
    super();
    this.addTags('queue');
    this.throttle = throttle !== undefined ? throttle : 0.0;
    this.capacity = capacity !== undefined ? capacity : Math.pow(2, 52);
    this.clients = [];
    this.lastPopTime = 0.0;
  }

  accept(visitor, depth) {
    visitor.visitQueue && visitor.visitQueue(this, depth);
    QNode.prototype.accept.call(this, visitor, depth);
  }

  hasCapacity() {
    return this.clients.length < this.capacity;
  }

  pushClient(client, ctime) {
    if (ctime === undefined)
      throw new Error('Must provide current time');
    push(this.clients, client);
    client.queueKey = this.key;
  }

  popClient(ctime) {
    const client = pop(this.clients);
    this.lastPopTime = ctime;
    client.queueKey = null;
    return client;
  }

  canYeild(ctime) {
    if (ctime === undefined)
      throw new Error('Must provide current time');
    if (!this.clients.length)
      return false;
    if (ctime - this.lastPopTime < this.throttle)
      return false;
    return true;
  }

  toString() {
    return `Queue(${this.label || this.tags})`;
  }
}
