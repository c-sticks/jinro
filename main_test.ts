import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { cuvalCards } from "./main.ts";

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
