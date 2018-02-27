import Server from './Server';

export default class Sink extends Server {
  constructor() {
    super();
    this.addTags('sink');
  }

  accept(visitor, depth) {
    visitor.visitSink && visitor.visitSink(this, depth);
    Server.prototype.accept.call(this, visitor, depth);
  }

  withOutput() {
    throw "Sinks can't have output queues.";
  }

  toString() {
    return `Sink(${this.label || this.tags})`;
  }
}
