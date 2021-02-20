import test from "ava";
import { pluck } from "../source/pluck";

test("creates an array values if one key is given", (t) => {
  const input = [
    { x: 1, y: "hello" },
    { x: 2, y: "world" },
    { x: 3, y: "hello" },
  ];
  t.deepEqual(pluck(input, "x"), [1, 2, 3]);
});

test("creates an array of arrays of values if multiple keys are given", (t) => {
  const input = [
    { x: 1, y: "hello", z: true },
    { x: 2, y: "world", z: true },
    { x: 3, y: "hello", z: false },
  ];
  t.deepEqual(pluck(input, "x", "z"), [
    [1, true],
    [2, true],
    [3, false],
  ]);
});
