// TODO: This should be more type safe
// It should infer the return type based on the number of arguments
// e.g. if given 1 arg, return type should be Array<T[K]> else should be
// Array<T[K][]>
export function pluck<T extends unknown, K extends keyof T>(
  list: T[],
  ...keys: K[]
): Array<T[K][]> | Array<T[K]> {
  const plucked = list.map((elem) => keys.map((k) => elem[k]));
  return keys.length > 1 ? plucked : plucked.flat();
}
