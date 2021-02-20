export function indexWith<
  T extends string | number | symbol,
  U extends unknown
>(list: T[], index: U): Record<T, U> {
  return Object.fromEntries(list.map((elem) => [elem, index])) as Record<T, U>;
}
