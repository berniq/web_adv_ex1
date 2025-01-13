import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";

// Serve the static files
const handler = async (req) => {
  const url = new URL(req.url);
  const path = url.pathname === "/" ? "/template.html" : url.pathname;
  
  try {
    return await serveFile(req, `.${path}`);
  } catch (err) {
    return new Response("404 Not Found", { status: 404 });
  }
};

// Start the server
console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });
