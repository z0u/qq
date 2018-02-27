'use strict';

export function formatDuration(totalSeconds) {
  const hours   = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  const seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  const minutesStr = minutes < 10 ? '0' + minutes : '' + minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : '' + seconds;
  return `${hours}:${minutesStr}:${secondsStr}`;
}

export function parseDuration(duration) {
  const components = duration.split(':');
  const hours = parseInt(components[0], 10);
  const minutes = parseInt(components[1], 10);
  const seconds = components.length > 2 ? parseInt(components[2], 10) : 0;
  return seconds + (60 * minutes) + (60 * 60 * hours);
}
