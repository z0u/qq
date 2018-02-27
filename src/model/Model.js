import {
  pop,
  prepend,
  push,
} from '../arrays';
import { parseDuration } from '../time';

export default class Model {
  constructor() {
    this.rootNodes = [];
    this.startTime = 0.0;
    this.endTime = 100.0;
    this.time = 0.0;
    this.tick = -1;
  }

  addRoot(node) {
    push(this.rootNodes, node);
    return this;
  }

  withStartTime(time) {
    if (typeof time == 'string')
      time = parseDuration(time);
    this.startTime = time;
    return this;
  }

  withEndTime(time) {
    if (typeof time == 'string')
      time = parseDuration(time);
    this.endTime = time;
    return this;
  }

  walk(visitor, depthFirst, allowRevisit) {
    const insertFn = depthFirst ? prepend : push;
    const visited = allowRevisit ? null : {};
    const queue = this.rootNodes.map(node => ({ depth: 0, node }));
    while (queue.length) {
      const entry = pop(queue);
      entry.node.accept(visitor, entry.depth);
      for (const nextNode of entry.node.inputs) {
        if (!allowRevisit) {
          if (visited[nextNode.key])
            continue;
          visited[nextNode.key] = true;
        }
        insertFn(queue, { depth: entry.depth + 1, node: nextNode });
      }
    }
  }

  filter(visitor) {
    const selection = [];
    function pushWhen(visitFn) {
      return (node) => {
        if (visitFn(node))
          selection.push(node);
      };
    }
    let pushingVisitor;
    if (typeof visitor === 'function') {
      pushingVisitor = { visitNode: pushWhen(visitor) };
    } else {
      pushingVisitor = {};
      for (const key of Object.keys(visitor)) {
        pushingVisitor[key] = pushWhen(visitor[key].bind(visitor));
      }
    }
    this.walk(pushingVisitor);
    return selection;
  }

  prettyPrint() {
    console.info('model:');
    const visitor = {
      visitServer: (server, depth) => {
        console.info('  '.repeat(depth) + `${server} serving ${server.client}`);
      },
      visitQueue: (queue, depth) => {
        console.info('  '.repeat(depth) + `${queue}: ${queue.clients}`);
      },
    };
    this.walk(visitor, true, true);
  }
}
