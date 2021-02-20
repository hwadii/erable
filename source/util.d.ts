export type DefaultRecord<T> = { [P in string | number | symbol]: T };

/**
 * @see https://github.com/sindresorhus/type-fest
 */
export type ConditionalKeys<Base, Condition> = NonNullable<
  { [K in keyof Base]: Base[K] extends Condition ? K : never; }[keyof Base]
>;

/**
 * @description TypeScript does not understand that spreading an array into an
 * object means that the keys of the object are the indices and the values are
 * the values of the original array.
 */
export type FromArray<T> = T extends unknown[] ? { [key: number]: T[number] } : T;
