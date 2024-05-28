import { createRoute, z } from "@hono/zod-openapi";
import { openApiErrorResponses } from "@/openapi/response";

export const CreateTokenRouteSchema = createRoute({
  tags: ["Token"],
  operationId: "CreateTokenRouteSchema",
  summary: "CreateTokenRouteSchema",
  description: "CreateTokenRouteSchema",
  method: "post",
  path: "/token",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            expires: z.date().optional().describe("Expires at time"),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "CreateTokenRouteSchema Success",
      content: {
        "application/json": {
          schema: z.object({
            id: z.string(),
            token: z.string(),
            expires: z.number().nullable(),
            userId: z.string().nullable(),
            createAt: z.number(),
            updateAt: z.number(),
          }),
        },
      },
    },
    ...openApiErrorResponses,
  },
});
