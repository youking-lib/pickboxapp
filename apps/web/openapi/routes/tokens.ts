import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { CreateTokenRouteSchema } from "./token.schema";
import { createToken } from "@/libs/api";

export function tokens(api: OpenAPIHono) {
  api.openapi(CreateTokenRouteSchema, async c => {
    const { expires } = c.req.valid("json");

    const token = await createToken({
      expires,
    });

    return c.json(token);
  });

  api.openapi(
    createRoute({
      method: "get",
      path: "/health",
      responses: {
        200: {
          description: "Index",
        },
      },
    }),
    c => {
      return c.text("ok");
    }
  );
}
