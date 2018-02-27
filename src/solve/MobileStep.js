import seedrandom from 'seedrandom';
import { Parser } from 'expr-eval';
import { intersects, transposedForEach } from '../arrays';
import { obMap } from '../objects';

export default class MobileStep {
  constructor(stepSize, time, targetRules, queues) {
    this.stepSize = stepSize;
    this.time = time;
    const parser = new Parser();
    this.targetRules = obMap(targetRules, (rule) => ({
      ...rule,
      serveWhen: parser.parse(rule.serveWhen),
      leaveWhen: parser.parse(rule.leaveWhen),
    }));
    this.random = seedrandom(`${time}`);
    this.outputs = {};
    this.queues = queues;
  }

  visitMobileServer(server) {
    const rule = this.targetRules[server.targetCharacteristic];
    if (server.client) {
      const params = this.findClient(server.client, this.queues);
      if (rule.leaveWhen.evaluate(params)) {
        // console.log(`${server} moving away from ${server.client}`);
        server.client = null;
      }
    } else {
      const clientTable = this.queues
        .filter((queue) => intersects(queue.tags, rule.queueTags))
        .map((queue) => queue.clients);
      transposedForEach(clientTable, (client, col, row, stop) => {
        const params = {
          positionInQueue: row,
          beingServed: client.serverKey && client.serverKey != server.key,
        };
        if (rule.serveWhen.evaluate(params)) {
          server.client = client;
          // console.log(`${server} moving to ${server.client}`);
          stop();
        }
      });
    }
  }

  findClient(client) {
    if (!client.queueKey) {
      return {
        positionInQueue: -1,
        beingServed: true,
      };
    } else {
      const queue = this.queues.find(q => q.key === client.queueKey);
      return {
        positionInQueue: queue.clients.indexOf(client),
        beingServed: false,
      };
    }
  }

}
