import { indexBy } from "../source/index-by";
import test from "ava";

test("creates an object with each index as keys", (t) => {
  const input = [
    { x: 1, y: "hello" },
    { x: 2, y: "world" },
  ];
  t.deepEqual(indexBy(input, "x"), {
    1: { x: 1, y: "hello" },
    2: { x: 2, y: "world" },
  });
});
