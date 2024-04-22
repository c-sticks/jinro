import { cuvalCardd } from "./main.ts";

const cards = cuvalCardd();

if (cards.length === 6) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
