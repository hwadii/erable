export function without<T, K extends keyof T>(
  obj: T,
  ...remove: K[]
): Omit<T, K> {
  const result: T = {} as T;
  for (const key in obj) {
    if (remove.includes(key as unknown as K)) {
      continue;
    }
    result[key] = obj[key];
  }
  return result;
}
