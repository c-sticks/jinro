import { cuvalCardd } from "./main.ts";

const cards = cuvalCardd();

if (cards.length === 6) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

let sum_prophet = 0;
for (const card of cards) {
  if (
    card === "prophet"
  ) {
    sum_prophet++;
  }
}

if (sum_prophet === 1) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
