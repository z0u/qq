import NRange from './NRange';
import StatsDigest from './StatsDigest';
import { lerp } from '../math';

/**
 * Single series of data.
 */
export default class StatsHistory {
  constructor(key, label, chunkSize) {
    this.key = key;
    this.label = label;
    this.chunkSize = chunkSize !== undefined ? chunkSize : 1;
    this.range = new NRange();
    this.digest = new StatsDigest();
    this.series = [];
  }

  push(x, y) {
    this.range.add(y);
    this.digest.add(y);
    if (!this.series.length || this.digest.n >= this.chunkSize) {
      this.series.push({ x: x, y: this.digest.mean });
      this.digest.reset();
    } else if (this.series.length > 1) {
      // Prevent current value from jumping around too much as it draws
      const { y: previous } = this.series[this.series.length - 2];
      const chunkInfluence = this.digest.n / this.chunkSize;
      const current = lerp(previous, this.digest.mean, chunkInfluence);
      this.series[this.series.length - 1] = { x: x, y: current };
    } else {
      this.series[this.series.length - 1] = { x: x, y: this.digest.mean };
    }
  }
}
