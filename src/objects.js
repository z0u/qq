export function obMap(ob, fn) {
  const mapped = {};
  for (const key of Object.keys(ob)) {
    mapped[key] = fn(ob[key], key);
  }
  return mapped;
}
