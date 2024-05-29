import { createRoute, z } from "@hono/zod-openapi";
import { openApiErrorResponses } from "@/openapi/response";
import { FileModel } from "@/prisma/zods";

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
          schema: FileModel.omit({
            createdAt: true,
            updatedAt: true,
            id: true,
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "AppendFileRoute Success",
      content: {
        "application/json": {
          schema: FileModel,
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
            key: z.string(),
          }),
        },
      },
    },
    ...openApiErrorResponses,
  },
});

export const PreHashRouteSchema = createRoute({
  tags: ["File"],
  operationId: "PreHash",
  summary: "PreHash",
  description: "PreHash",
  method: "post",
  path: "/file/pre-hash",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            hash: z.string(),
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
            key: z.string().nullable(),
          }),
        },
      },
    },
    ...openApiErrorResponses,
  },
});
