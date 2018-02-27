import NRange from './NRange';

/**
 * Welford's algorithm for online calculation of mean and variance
 */
export default class StatsDigest {
  constructor() {
    this.n = null;
    this.range = new NRange();
    this.mean = null;
    this.m2 = null;
    this.reset();
  }

  reset() {
    this.n = 0;
    this.range.reset();
    this.mean = 0.0;
    this.m2 = 0.0;
  }

  add(x) {
    this.n += 1;
    const delta = x - this.mean;
    this.mean += delta / this.n;
    const delta2 = x - this.mean;
    this.m2 += delta * delta2;
    this.range.add(x);
  }

  variance() {
    return this.n > 2 ? this.m2 / (this.n - 1) : 0.0;
  }
}
