import { createRoute, z } from "@hono/zod-openapi";
import { openApiErrorResponses } from "@/openapi/response";

export const AppendFileRouteSchema = createRoute({
  tags: ["File"],
  operationId: "AppendFileRoute",
  summary: "AppendFileRoute",
  description: "AppendFileRoute",
  method: "post",
  path: "/file",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            key: z.string(),
            hash: z.string(),
            tokenId: z.string(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Index",
      content: {
        "application/json": {
          schema: z.object({}),
        },
      },
    },
    ...openApiErrorResponses,
  },
});

export const UploadPreSignRouteSchema = createRoute({
  tags: ["File"],
  operationId: "UploadPreSign",
  summary: "UploadPreSign",
  description: "UploadPreSign",
  method: "post",
  path: "/file/upload-pre-sign",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            tokenId: z.string(),
            hash: z.string(),
            filename: z.string(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Index",
      content: {
        "application/json": {
          schema: z.object({
            url: z.string(),
            key: z.string().nullable(),
          }),
        },
      },
    },
    ...openApiErrorResponses,
  },
});
