export default class NRange {
  constructor(min, max) {
    this.min = min !== undefined ? min : null;
    this.max = max !== undefined ? max : null;
    this.reset();
  }

  reset() {
    this.min = NaN;
    this.max = NaN;
  }

  add(x) {
    this.min = this.min <= x ? this.min : x;
    this.max = this.max >= x ? this.max : x;
    return this;
  }

  union(other) {
    this.min = this.min <= other.min ? this.min : other.min;
    this.max = this.max >= other.max ? this.max : other.max;
    return this;
  }

  toArray() {
    return [this.min, this.max];
  }
}
