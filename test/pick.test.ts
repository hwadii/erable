import test from "ava";
import { pick } from "../source/pick";

test("extracts the value of the given key in the first object", (t) => {
  const input = [
    { x: 1, y: "hello" },
    { x: 2, y: "world" },
    { x: 3, y: "hello" },
  ];
  t.deepEqual(pick(input, "x"), 1);
});

test("extracts an array of values linked to the given keys in the first object", (t) => {
  const input = [
    { x: 1, y: "hello" },
    { x: 2, y: "world" },
    { x: 3, y: "hello" },
  ];
  t.deepEqual(pick(input, "x", "y"), [1, "hello"]);
});
