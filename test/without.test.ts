import { without } from "../source/without";
import test from "ava";

test('creates a new object with the specified keys removed from the original object', (t) => {
  const input = {
    a: 2,
    b: 3,
    c: 'hello',
  };
  t.deepEqual(without(input, 'a', 'b'), { c: 'hello' });
});

test('works when the keys are duplicated', (t) => {
  const input = {
    a: 2,
    b: 3,
    c: 'hello',
  };
  t.deepEqual(without(input, 'a', 'a'), { b: 3, c: 'hello' });
});
