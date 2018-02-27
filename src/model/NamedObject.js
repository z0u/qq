import {
  has,
  push,
} from '../arrays';

export default class NamedObject {
  constructor() {
    this.key = `${this.constructor.name}-${NamedObject.counter++}`;
    this.tags = [];
    this.label = null;
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
}

NamedObject.counter = 0;
