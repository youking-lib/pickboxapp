import { z } from "@/libs/schema/zod";
import { openApiErrorResponses } from "@/libs/openapi/response";
import { ZodOpenApiOperationObject } from "zod-openapi";

export const AppendFileBodySchema = z.object({
  filename: z.string(),
  tokenId: z.string(),
});

export const AppendFileDataSchema = z.object({});

export const appendFile: ZodOpenApiOperationObject = {
  operationId: "append file to token",
  summary: "append file to token",
  description: "append file to token",
  requestBody: {
    content: {
      "application/json": {
        schema: AppendFileBodySchema,
      },
    },
  },
  responses: {
    "200": {
      description: "Success.",
      content: {
        "application/json": {
          schema: AppendFileDataSchema,
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Tokens"],
  security: [{ token: [] }],
};
