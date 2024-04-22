import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std/assert/mod.ts";
import { cuvalCards } from "./lib.ts";

Deno.test("cuvalCards length", () => {
  const cards = cuvalCards();

  assertEquals(cards.length, 6);
});

Deno.test("cuvalCards v", () => {
  const cards = cuvalCards();

  assertEquals(cards.filter((c) => c === "prophet").length, 1);
  assertEquals(cards.filter((c) => c === "manwolf").length, 2);
  assertEquals(cards.filter((c) => c === "villeger").length, 3);
});

Deno.test("cuvalCards randomness", () => {
  const res1 = cuvalCards();
  const res2 = cuvalCards();
  assertNotEquals(res1, res2);
});
