export function pick<T extends unknown, K extends keyof T>(
  list: T[],
  ...keys: K[]
): T[K] | Array<T[K]> | undefined {
  if (list.length === 0 || keys.length === 0) { return undefined; }

  if (keys.length > 1) {
    return keys.map((key) => list[0]![key]);
  } else {
    return list[0]![keys[0]!];
  }
}
