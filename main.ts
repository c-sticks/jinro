import { cuvalCards, renderCli } from "./lib.ts";

Deno.serve((request) => {
  request.url;
  const view = renderCli(cuvalCards());
  return new Response(`url is ${request.url}\n` + view);
});
