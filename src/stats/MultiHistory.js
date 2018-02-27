import NRange from './NRange';
import StatsHistory from './StatsHistory';

/**
 * Multiple series of data.
 */
export default class MultiHistory {
  constructor(chunkSize) {
    this.histories = [];
    this.seriesKeys = {};
    this.chunkSize = chunkSize;
  }

  add(statsDecl) {
    for (const prop in statsDecl) {
      const index = this.histories.length;
      const label = statsDecl[prop];
      this.seriesKeys[prop] = index;
      this.histories.push(new StatsHistory(prop, label, this.chunkSize));
    }
    return this;
  }

  push(x, stats) {
    for (const prop in stats) {
      const history = this.histories[this.seriesKeys[prop]];
      history.push(x, stats[prop]);
    }
    return this;
  }

  toSeries(filterBy) {
    const indices = this.getNamedIndices(filterBy);
    return this.histories.filter(function(ob, i) {
      return indices.indexOf(i) >= 0;
    }).map(function(history) {
      return history.series;
    });
  }

  toRanges(filterBy) {
    const indices = this.getNamedIndices(filterBy);
    return this.histories.filter(function(ob, i) {
      return indices.indexOf(i) >= 0;
    }).map(function(history) {
      return history.range;
    });
  }

  toRange(filterBy) {
    return this.toRanges(filterBy).reduce(function(a, b) {
      return a.union(b);
    }, new NRange());
  }

  getNamedIndices(filterBy) {
    if (!filterBy) {
      return this.histories.map(function(ob, i) { return i; });
    }
    return filterBy.map(function(key) { return this.seriesKeys[key]; }, this);
  }
}
