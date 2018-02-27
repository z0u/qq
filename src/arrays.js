export function remove(list, ob) {
  const i = list.indexOf(ob);
  if (i >= 0)
    list.splice(list.indexOf(ob), 1);
}

export function has(list, ob) {
  return list.indexOf(ob) >= 0;
}

export function intersects(list, obs) {
  for (const ob of obs) {
    if (has(list, ob))
      return true;
  }
  return false;
}

export function push(list, ob) {
  list.push(ob);
}

export function prepend(list, ob) {
  list.splice(0, 0, ob);
}

export function pop(list) {
  return list.splice(0, 1)[0];
}

export function getNormalized(xs, normalizedIndex) {
  let i = Math.floor(xs.length * normalizedIndex);
  if (i >= xs.length)
    i = xs.length - 1;
  return xs[i];
}

export function roundRobin(xs, lastIndex, accept) {
  if (lastIndex >= xs.length)
    lastIndex = xs.length - 1;
  let i;
  for (i = lastIndex + 1; i < xs.length; i++) {
    if (accept(xs[i]))
      return i;
  }
  for (i = 0; i <= lastIndex; i++) {
    if (accept(xs[i]))
      return i;
  }
  return lastIndex;
}

export function transposedForEach(table, fn) {
  const xss = [...table];
  let stop = false;
  const stopIteration = () => { stop = true; };
  const nRows = xss.map(xs => xs.length).reduce((a, b) => a > b ? a : b, 0);
  for (let row = 0; !stop && row < nRows; row++) {
    for (let col = 0; !stop && col < xss.length;) {
      const xs = xss[col];
      if (row < xs.length) {
        const x = xs[row];
        fn(x, col, row, stopIteration);
        col += 1;
      } else {
        // This column is exhausted; may as well remove it.
        xss.splice(col, 1);
      }
    }
  }
}
