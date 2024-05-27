import { z } from "@/libs/schema/zod";
import { openApiErrorResponses } from "@/libs/openapi/response";
import { ZodOpenApiOperationObject } from "zod-openapi";

export const UploadFilePreSignBodySchema = z.object({
  tokenId: z.string(),
  hash: z.string(),
});

export const UploadFilePreSignDataSchema = z.object({
  url: z.string(),
  key: z.string().nullable(),
});

export const uploadFilePreSign: ZodOpenApiOperationObject = {
  operationId: "upload file pre sign at s3",
  summary: "upload file pre sign at s3",
  description: "upload file pre sign at s3",
  requestBody: {
    content: {
      "application/json": {
        schema: UploadFilePreSignBodySchema,
      },
    },
  },
  responses: {
    "200": {
      description: "Success.",
      content: {
        "application/json": {
          schema: UploadFilePreSignDataSchema,
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Tokens"],
  security: [{ token: [] }],
};
