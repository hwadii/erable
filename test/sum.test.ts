import { sum } from "../source/sum";
import test from "ava";

test("sums the numbers with the given key", (t) => {
  const input = [
    { x: 1, y: "hello" },
    { x: 2, y: "world" },
  ];
  t.deepEqual(sum(input, "x"), 3);
});
