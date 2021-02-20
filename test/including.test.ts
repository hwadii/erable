import { including } from "../source/including";
import test from "ava";

test("creates a new object by merging two objects", (t) => {
  const base = { a: 2, b: 3 };
  const other = { c: 1, d: { foo: "hello" } };
  t.deepEqual(including(base, other), { a: 2, b: 3, c: 1, d: { foo: "hello" } });
});

test("does not allow non object types", (t) => {
  const base = [1, 2, 'hello'];
  const other = { c: 1, d: { foo: "hello" } };
  t.deepEqual(including(base, other), { 0: 1, 1: 2, 2: 'hello', c: 1, d: { foo: "hello" } });
});
