import { indexWith } from "../source/index-with";
import test from "ava";

test("creates an object with array elements as key and number index as value", (t) => {
  t.deepEqual(indexWith(["hello", "world"], 2), { hello: 2, world: 2 });
});

test("creates an object with array elements as key and string index as value", (t) => {
  t.deepEqual(indexWith(["hello", "world"], "foobar"), {
    hello: "foobar",
    world: "foobar",
  });
});

test("creates an object with array elements as key and non primitive type index as value", (t) => {
  const nonPrimitive = { foo: "bar", bar: "foo" };
  t.deepEqual(indexWith(["hello", "world"], nonPrimitive), {
    hello: nonPrimitive,
    world: nonPrimitive,
  });
});

test("creates an empty object with empty array", (t) => {
  t.deepEqual(indexWith([], 2), {});
});
