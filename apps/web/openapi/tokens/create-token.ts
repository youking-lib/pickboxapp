import { z } from "@/libs/schema/zod";
import { openApiErrorResponses } from "@/libs/openapi/response";
import { ZodOpenApiOperationObject } from "zod-openapi";

export const CreateTokenBodySchema = z.object({
  expires: z.date().optional().describe("Expires at time"),
});

export const CreateTokenDataSchema = z.object({
  id: z.string(),
  token: z.string(),
  expires: z.date().nullable(),
  userId: z.string().nullable(),
  createAt: z.date(),
  updateAt: z.date(),
});

export const createToken: ZodOpenApiOperationObject = {
  operationId: "createToken",
  summary: "Create a token",
  description: "Create a token",
  requestBody: {
    content: {
      "application/json": {
        schema: CreateTokenBodySchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The token was created.",
      content: {
        "application/json": {
          schema: CreateTokenDataSchema,
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Tokens"],
  security: [{ token: [] }],
};
