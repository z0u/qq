import { parseDuration } from './time';

export const ARRIVALS = {
  times: ['6:00', '9:00', '12:00', '15:00', '18:00', '21:00', '24:00']
    .map(parseDuration),
  rates: [     0,      5,       3,      5,      6,       3,       0]
    .map(function(rate) { return rate * 1.3; })
    .map(function(arrivalsPerMinute) { return arrivalsPerMinute / 60; }),
};
