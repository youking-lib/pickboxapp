import { handle } from "hono/vercel";
import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { file, token } from "@/openapi";

const app = new OpenAPIHono().basePath("/api");

file(app);
token(app);

app.get(
  "/ui",
  swaggerUI({
    url: "/api/doc",
  })
);

app.doc("/doc", {
  info: {
    title: "An API",
    version: "v1",
  },
  openapi: "3.1.0",
});

export const GET = handle(app);
export const POST = handle(app);
