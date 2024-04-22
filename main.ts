import { cuvalCards, renderCli } from "./lib.ts";

Deno.serve((request) => {
  const view = renderCli(cuvalCards());
  return new Response(view);
});
