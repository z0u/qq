import { defineSupportCode } from 'cucumber';
import { curryInterpolate } from '../../src/math';
import * as time from '../../src/time';

defineSupportCode(function({ Given, When, Then }) {
  Given('an interpolator from {float}={float} to {float}={float}',
    function (x1, y1, x2, y2) {
      this.interpolator = curryInterpolate([x1, x2], [y1, y2]);
    });

  When('I ask for value {float}', function (x) {
    this.value = this.interpolator(x);
  });

  Then('I should get {float}', function (y) {
    if (this.value !== y) {
      throw new Error(`Interpolated value should be ${y} but was ${this.value}`);
    }
  });

  Given('a locale of {string}', function (_locale) {
    return null;
  });

  When('I set the time to {string}', function (x) {
    this.value = time.parseDuration(x);
  });

  Then('the elapsed time is {int} seconds', function (y) {
    if (this.value !== y) {
      throw new Error(`Duration should be ${y} but was ${this.value}`);
    }
  });

  When('I format {int} as a timecode', function (x) {
    this.value = time.formatDuration(x);
  });

  Then('the timecode is {string}', function (y) {
    if (this.value !== y) {
      throw new Error(`Timecode should be ${y} but was ${this.value}`);
    }
  });
});
