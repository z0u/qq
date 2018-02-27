import now from 'time-now';

import {
  Source,
  Sink,
  MobileServer,
  Model,
  Queue,
  Server,
} from './model';
import { Solver } from './solve';
import { curryInterpolate } from './math';
import {
  ColumnVis,
  StatsChart,
} from './render';
import QueueSimulator from './QueueSimulator';
import { ARRIVALS } from './parameters';

// eslint-disable-next-line no-unused-vars
import styles from './main.css';
import logo from './assets/logo.svg';
const logoImg = document.getElementById('logo');
logoImg.src = logo;

function modelFactory() {
  const source = new Source()
    .withLabel('source')
    .addTags('hidden')
    .withArrivalCharacteristic('standard')
  ;
  const exit = new Sink()
    .withLabel('exit')
    .addTags('hidden')
  ;
  const exitQueue = new Queue(1.0).addTags('exit').withOutput(exit);

  const model = new Model()
    .withStartTime('6:00')
    .withEndTime('24:00')
    .addRoot(exit)
  ;

  const selfServeQueue = new Queue(1.0).addTags('waiting').withInput(source);
  new Server().withLabel('Self serve')
    .withInput(selfServeQueue)
    .withOutput(exitQueue)
    .withServiceCharacteristic('self-serve')
  ;
  new Server().withLabel('Self serve')
    .withInput(selfServeQueue)
    .withOutput(exitQueue)
    .withServiceCharacteristic('self-serve')
  ;
  new Server().withLabel('Self serve')
    .withInput(selfServeQueue)
    .withOutput(exitQueue)
    .withServiceCharacteristic('self-serve')
  ;
  new Server().withLabel('Self serve')
    .withInput(selfServeQueue)
    .withOutput(exitQueue)
    .withServiceCharacteristic('self-serve')
  ;

  addCheckout(model);
  addCheckout(model);

  model.addRoot(new MobileServer()
    .addTags('customer-service-rep')
    .withServiceCharacteristic('customer-service-rep')
    .withTargetCharacteristic('customer-service-rep')
  );
  return model;
}

function solverFactory() {
  return new Solver(1.0)
    .addArrivalRule(
      'standard',
      curryInterpolate(ARRIVALS.times, ARRIVALS.rates),
      () => ({ appliances: 2, clothes: 3, question: 1, pay: 1 }),
    )
    .addServiceRule(
      'self-serve',
      {
        appliances: { rate: 1/4 },
        clothes: { rate: 1/10 },
        question: { rate: 1/15 },
        pay: { rate: 1/25 },
      },
    )
    .addServiceRule(
      'checkout',
      {
        appliances: { rate: 1/2 },
        clothes: { rate: 1/5 },
        question: { rate: 1/5 },
        pay: { rate: 1/20 },
      },
    )
    .addServiceRule(
      'customer-service-rep',
      {
        question: { rate: 1/5 },
      },
    )
    .addTargetRule(
      'customer-service-rep',
      {
        queueTags: ['waiting'],
        serveWhen: '!beingServed and positionInQueue >= 3',
        leaveWhen: 'beingServed or positionInQueue < 2',
      },
    )
  ;
}

function visFactories() {
  return [
    new ColumnVis('#column-vis'),
    new StatsChart('#stats-chart1', ['nWaiting', 'nClients']),
    new StatsChart('#stats-chart2', ['nServing']),
    new StatsChart('#stats-chart3', ['arrivalRate']),
  ];
}

let simulator;

function init() {
  simulator = new QueueSimulator(now, modelFactory, solverFactory, visFactories);
  simulator.frameRate = 30;
  simulator.tickRate = 256;
  simulator.reset();
  simulator.model.prettyPrint();
}
init();

export function addCheckout(model) {
  const checkouts = model.filter(node => node.label === 'Checkout');
  for (const checkout of checkouts) {
    if (!checkout.open) {
      checkout.open = true;
      return checkout;
    }
  }

  const source = model.filter(node => node.label === 'source')[0];
  const exitQueue = model.filter(node => node.label === 'exit')[0].inputs[0];
  return new Server()
    .withLabel('Checkout')
    .addTags('checkout')
    .withServiceCharacteristic('checkout')
    .withInput(new Queue(1.0).addTags('waiting').withInput(source))
    .withOutput(exitQueue);
}

export function closeCheckout(model) {
  const openCheckouts = model.filter(node => node.label === 'Checkout' && node.open);
  if (!openCheckouts.length)
    return;
  const checkout = openCheckouts[openCheckouts.length - 1];
  checkout.open = false;
}

function step() {
  simulator.stepSimSingle();
  simulator.render();
}

function restart() {
  simulator.reset();
  simulator.start();
}

function faster() {
  let tickRate = simulator.tickRate * 2;
  if (tickRate > 100000)
    tickRate = 100000;
  simulator.setTickRate(tickRate);
}

function slower() {
  let tickRate = simulator.tickRate / 2;
  if (tickRate < 1)
    tickRate = 1;
  simulator.setTickRate(tickRate);
}

window.addEventListener('load', () => {
  simulator.reset();
  simulator.start();
});

window.addEventListener('resize', () => {
  simulator.render();
});

document.addEventListener('keypress', (event) => {
  if (event.key === ' ' || event.keyCode === 32) {
    simulator.togglePause();
    event.preventDefault();
  } else if (event.key === '=' || event.keyCode === 61) {
    faster();
  } else if (event.key === '+' || event.keyCode === 43) {
    faster();
  } else if (event.key === '-' || event.keyCode === 45) {
    slower();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.keyCode === 39) {
    step();
  }
});
document.querySelector('#restart-btn')
  .addEventListener('click', restart);
document.querySelector('#pause-btn')
  .addEventListener('click', () => {
    simulator.togglePause();
    simulator.render();
  });
document.querySelector('#step-btn')
  .addEventListener('click', step);
document.querySelector('#faster-btn')
  .addEventListener('click', faster);
document.querySelector('#slower-btn')
  .addEventListener('click', slower);
document.querySelector('#add-checkout-btn')
  .addEventListener('click', () => {
    addCheckout(simulator.model);
    simulator.render();
  });
document.querySelector('#close-checkout-btn')
  .addEventListener('click', () => {
    closeCheckout(simulator.model);
    simulator.render();
  });
