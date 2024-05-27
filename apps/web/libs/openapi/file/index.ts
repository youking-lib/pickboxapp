import { ZodOpenApiPathsObject } from "zod-openapi";
import { appendFile } from "./append-file";
import { uploadFilePreSign } from "./upload-pre-sign";

export * from "./append-file";

export const tokensPaths: ZodOpenApiPathsObject = {
  "/file": {
    post: appendFile,
  },
  "/file/upload-pre-sign": {
    post: uploadFilePreSign,
  },
};
