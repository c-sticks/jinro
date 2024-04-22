export function cuvalCards(): string[] {
  const cards = [
    "prophet",
    "villeger",
    "villeger",
    "villeger",
    "manwolf",
    "manwolf",
  ];

  return cards.toSorted(() => Math.random() - 0.5);
}

export function renderCli(cards: string[]): string {
  const lines = [];
  for (let i = 0; i < cards.length; i++) {
    lines.push((i + 1) + ". " + cards[i]);
  }

  return lines.join("\n");
}
