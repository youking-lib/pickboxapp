import { ZodOpenApiPathsObject } from "zod-openapi";
import { createToken } from "./create-token";

export * from "./create-token";

export const tokensPaths: ZodOpenApiPathsObject = {
  "/tokens": {
    post: createToken,
  },
};
