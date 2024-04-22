import { cuvalCards } from "./lib.ts";

let cards = cuvalCards();
// const view = renderCli(cuvalCards());

Deno.serve((request) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === "/reset" && request.method === "POST") {
    cards = cuvalCards();
    url.pathname = "/";
    return Response.redirect(url.href);
  }

  for (let i = 0; i < 6; i++) {
    if (pathname === `/${i + 1}`) {
      return new Response(
        `
pathname is ${pathname}
Your Card is ` + cards[i],
      );
    }
  }

  return new Response(
    `
    <html>
    <body>
    <a href="/1"> 1</a>
    <a href="/2"> 2</a>
    <a href="/3"> 3</a>
    <a href="/4"> 4</a>
    <a href="/5"> 5</a>
    <a href="/6"> 6</a>
    <form action="reset" method="post">
      <button>shuffle</button>
    </form>
    </body>
    </html>
    `,
    {
      headers: { "content-type": "text/html" },
    },
  );
});
