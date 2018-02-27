import NamedObject from './NamedObject';
import {
  has,
  push,
} from '../arrays';

export default class QNode extends NamedObject {
  constructor() {
    super();
    this.inputs = [];
    this.outputs = [];
    this.open = true;
  }

  addTags() {
    [].slice.call(arguments).forEach(function(tag) {
      if (!has(this.tags, tag))
        push(this.tags, tag);
    }, this);
    return this;
  }

  withLabel(label) {
    this.label = label;
    return this;
  }

  withInput(node) {
    push(this.inputs, node);
    push(node.outputs, this);
    return this;
  }

  withOutput(node) {
    push(this.outputs, node);
    push(node.inputs, this);
    return this;
  }

  accept(visitor, depth) {
    visitor.visitNode && visitor.visitNode(this, depth);
  }
}
