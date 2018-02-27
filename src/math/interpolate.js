export function lerp(a, b, fac) {
  return a + (b - a) * fac;
}

export function unlerp(a, b, val) {
  return (val - a) / (b - a);
}

export function interpolate(xs, ys, x) {
  let lowerBound = null;
  let upperBound = null;
  let i;
  for (i = 0; i < xs.length; i++) {
    if (x > xs[i])
      lowerBound = i;
  }
  for (i = xs.length - 1; i >= 0; i--) {
    if (x < xs[i])
      upperBound = i;
  }

  if (upperBound === null)
    return ys[0];
  if (lowerBound === null)
    return ys[ys.length - 1];

  const fac = unlerp(xs[lowerBound], xs[upperBound], x);
  return lerp(ys[lowerBound], ys[upperBound], fac);
}

export function curryInterpolate(xs, ys) {
  return x => interpolate(xs, ys, x);
}
