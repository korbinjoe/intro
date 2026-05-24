import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  const { pathname } = new URL(req.url);

  if (pathname === "/favicon.svg" || pathname === "/favicon.ico") {
    return serveFile(req, "./favicon.svg");
  }

  return serveFile(req, "./index.html");
});