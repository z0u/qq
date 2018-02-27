import { defineSupportCode } from 'cucumber';
import QueueSimulator from '../../src/QueueSimulator';
import {
  Model,
  Queue,
  Server,
  Sink,
  Source,
} from '../../src/model';
import { Solver } from '../../src/solve';

defineSupportCode(function({ Given, When, Then }) {
  Given('a simple simulator', function () {
    function modelFactory() {
      const source = new Source()
        .withLabel('source')
        .withArrivalCharacteristic('customer')
      ;
      const exit = new Sink().withLabel('exit');
      const exitQueue = new Queue(1.0).withOutput(exit);
      new Server()
        .withInput(new Queue(1.0).withInput(source))
        .withOutput(exitQueue)
        .withServiceCharacteristic('clerk')
      ;
      return new Model()
        .addRoot(exit)
      ;
    }

    function solverFactory() {
      return new Solver(1.0)
        .addArrivalRule('customer', () => 1.0, () => ({ foo: 3 }))
        .addServiceRule('clerk', ({ foo: { rate: 1/2 } }))
      ;
    }

    this.simulator = new QueueSimulator(() => 0, modelFactory, solverFactory);
    this.simulator.reset();
  });

  When('a timestep passes', function () {
    this.simulator.stepSimSingle();
  });

  Then('the number of clients in the system is {int}', function (n) {
    let nClients = 0;
    const visitor = {
      visitServer: (server) => {
        if (server.client) {
          // console.log(`Client ${server.client} being served by ${server}`);
          nClients += 1;
        }
      },
      visitQueue: (queue) => {
        if (queue.clients.length) {
          // console.log(`${queue.clients.length} clients waiting in ${queue}`);
          nClients += queue.clients.length;
        }
      },
    };
    // this.simulator.model.prettyPrint();
    this.simulator.model.walk(visitor);
    if (nClients !== n) {
      throw new Error(`Number of clients should be ${n} but was ${nClients}`);
    }
  });
});
