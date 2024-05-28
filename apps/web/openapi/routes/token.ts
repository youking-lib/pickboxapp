import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { CreateTokenRouteSchema } from "./token.schema";
import { createToken } from "@/libs/api";

export function token(api: OpenAPIHono) {
  api.openapi(CreateTokenRouteSchema, async c => {
    const { expires } = c.req.valid("json");

    const token = await createToken({
      expires,
    });

    return c.json({
      id: token.id,
      token: token.token,
      userId: token.userId,
      expires: token.expires?.getTime() || null,
      createAt: token.createdAt.getTime(),
      updateAt: token.updatedAt.getTime(),
    });
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
