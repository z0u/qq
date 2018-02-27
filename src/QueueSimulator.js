import MultiHistory from './stats/MultiHistory';
import { lerp } from './math';

export default class QueueSimulator {
  constructor(now, modelFactory, solverFactory, visFactories) {
    this.now = () => now() * 0.001;
    this.modelFactory = modelFactory;
    this.solverFactory = solverFactory;
    this.visFactories = visFactories;

    this.frameRate = 30;
    this.tickRate = 60;
    this.tickOverload = 20;

    this.timer = null;
    this.reset();
  }

  reset() {
    this.model = this.modelFactory();
    this.solver = this.solverFactory();
    if (this.visFactories)
      this.renderers = this.visFactories();
    else
      this.renderers = [];
    this.tick = 0;
    this.startTime = null;
    this.pauseTime = null;
    this.lastTickTime = null;
    this.lastFrameTime = null;
    this.lastRenderedTick = 0;
    this.currentTickRate = 0.0;
    this.currentFrameRate = 0.0;
    this.histories = new MultiHistory(300);
    this.solver.initialize(this.model, this.histories);
  }

  setFrameRate(frameRate) {
    this.frameRate = frameRate;
    if (this.timer) {
      this.setInterval();
    }
  }

  setTickRate(tickRate) {
    this.tickRate = tickRate;
    if (this.timer) {
      this.setInterval();
    }
  }

  step() {
    if (this.pauseTime)
      return;

    const elapsedRealTime = this.now() - this.startTime;
    this.stepSim(elapsedRealTime);
    if (this.model.time < this.model.endTime) {
      this.stepVis(elapsedRealTime);
    } else {
      this.calcFrameRate(elapsedRealTime);
      this.pause();
      this.render();
    }
  }

  stepSim(elapsedRealTime) {
    let nTicksDue;
    if (this.lastTickTime !== null)
      nTicksDue = (elapsedRealTime - this.lastTickTime) * this.tickRate;
    else
      nTicksDue = 1.0;
    nTicksDue += 0.05;

    // Force slow-running simulation to draw occasionally.
    const maxTicksPerFrame = (this.tickRate / this.frameRate) * this.tickOverload;
    if (maxTicksPerFrame >= 1 && nTicksDue > maxTicksPerFrame)
      nTicksDue = maxTicksPerFrame;

    if (nTicksDue < 1.0)
      return;

    for (let i = 0; i < nTicksDue; i++) {
      this.stepSimSingle();
      if (this.model.time >= this.model.endTime) {
        break;
      }
    }

    this.lastTickTime = elapsedRealTime;
  }

  stepSimSingle() {
    this.tick += 1;
    this.model = this.solver.step(this.model, this.histories, this.tick);
  }

  stepVis(elapsedRealTime) {
    let nFramesDue;
    if (this.lastFrameTime !== null)
      nFramesDue = (elapsedRealTime - this.lastFrameTime) * this.frameRate;
    else
      nFramesDue = 1.0;
    nFramesDue += 0.05;

    if (nFramesDue < 1.0)
      return;

    this.calcFrameRate(elapsedRealTime);
    this.render();
  }

  calcFrameRate(elapsedRealTime) {
    let timeSinceLastFrame = elapsedRealTime;
    if (this.lastFrameTime)
      timeSinceLastFrame -= this.lastFrameTime;
    const currentFrameRate = 1.0 / timeSinceLastFrame;
    this.currentFrameRate = lerp(this.currentFrameRate, currentFrameRate, 1 / currentFrameRate);
    this.lastFrameTime = elapsedRealTime;

    const elapsedTicks = this.tick - this.lastRenderedTick;
    this.currentTickRate = elapsedTicks / timeSinceLastFrame;
    this.lastRenderedTick = this.tick;
  }

  render() {
    this.renderers.forEach(function(renderer) {
      renderer.draw(
        this.model, this.histories, this.currentFrameRate, this.currentTickRate);
    }, this);
  }

  start() {
    if (this.pauseTime) {
      this.startTime = this.now() - (this.pauseTime - this.startTime);
      this.pauseTime = null;
    } else {
      this.startTime = this.now();
    }
    this.setInterval();
  }

  setInterval() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    const rate = this.frameRate;
    this.timer = window.setInterval(this.step.bind(this), 1000 / rate);
  }

  pause() {
    this.pauseTime = this.now();
  }

  togglePause() {
    if (this.pauseTime || !this.startTime)
      this.start();
    else
      this.pause();
  }

  stop() {
    if (this.timer)
      window.clearInterval(this.timer);
    this.timer = null;
    this.startTime = null;
    this.pauseTime = null;
  }
}
