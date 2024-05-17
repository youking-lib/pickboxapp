import { ZodOpenApiResponseObject } from "zod-openapi";
import z from "./zod";

const docErrorUrl = "https://pickbox.app/docs/api-reference/errors";

export const ErrorCode = z.enum([
  "bad_request",
  "not_found",
  "internal_server_error",
  "unauthorized",
  "forbidden",
  "rate_limit_exceeded",
  "invite_expired",
  "invite_pending",
  "exceeded_limit",
  "conflict",
  "unprocessable_entity",
]);

const ErrorSchema = z.object({
  error: z.object({
    code: ErrorCode.openapi({
      description: "A short code indicating the error code returned.",
      example: "not_found",
    }),
    message: z.string().openapi({
      description: "A human readable error message.",
      example: "The requested resource was not found.",
    }),
    doc_url: z.string().optional().openapi({
      description: "A URL to more information about the error code reported.",
      example: "https://dub.co/docs/api-reference",
    }),
  }),
});

export type ErrorResponse = z.infer<typeof ErrorSchema>;
export type ErrorCodes = z.infer<typeof ErrorCode>;

export const errorSchemaFactory = (
  code: z.infer<typeof ErrorCode>,
  description: string
): ZodOpenApiResponseObject => {
  return {
    description,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            error: {
              type: "object",
              properties: {
                code: {
                  type: "string",
                  enum: [code],
                  description:
                    "A short code indicating the error code returned.",
                  example: code,
                },
                message: {
                  type: "string",
                  description:
                    "A human readable explanation of what went wrong.",
                  example: "The requested resource was not found.",
                },
                doc_url: {
                  type: "string",
                  description:
                    "A link to our documentation with more details about this error code",
                  example: `${docErrorUrl}#${code.replace("_", "-")}`,
                },
              },
              required: ["code", "message"],
            },
          },
          required: ["error"],
        },
      },
    },
  };
};
