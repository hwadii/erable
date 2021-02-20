import { FromArray } from "./util";

type Merge<T, U> = FromArray<T> & FromArray<U>;

export function including<T extends object, U extends object>(base: T, other: U): Merge<T, U> {
  return { ...base, ...other } as Merge<T, U>;
}
