import { ConditionalKeys } from "./util";

export function sum<T, K extends ConditionalKeys<T, number>>(
  list: T[],
  index: K
) {
  return list.reduce((acc, curr) => acc + (curr[index] as unknown as number), 0);
}
