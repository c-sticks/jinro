import { cuvalCardd } from "./main.ts";

const cards = cuvalCardd();

if (cards.length === 6) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

let sum_prophet = 0;
let sum_villeger = 0;
let sum_manwolf = 0;
for (const card of cards) {
  if (card === "prophet") {
    sum_prophet++;
  }
  if (card === "villeger") {
    sum_villeger++;
  }
  if (card === "manwolf") {
    sum_manwolf++;
  }
}

if (sum_prophet === 1) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

if (sum_villeger === 3) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
if (sum_manwolf === 2) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
