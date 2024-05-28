import { OpenAPIHono } from "@hono/zod-openapi";
import { appendFileForToken, getExistFileByHash } from "@/libs/api/file";
import { getUploadFilePreSignedUrl } from "@/libs/storage";

import {
  AppendFileRouteSchema,
  PreHashRouteSchema,
  UploadPreSignRouteSchema,
} from "./file.schema";

export function file(api: OpenAPIHono) {
  api.openapi(AppendFileRouteSchema, async c => {
    const { name, key, hash, tokenId } = c.req.valid("json");

    const file = await appendFileForToken({
      name,
      key,
      hash,
      path: "",
      size: "",
      type: "",
    });

    return c.json(file as any);
  });

  api.openapi(UploadPreSignRouteSchema, async c => {
    const { filename } = c.req.valid("json");

    const { url, key } = await getUploadFilePreSignedUrl(filename);

    return c.json({
      url: url,
      key: key,
    });
  });

  api.openapi(PreHashRouteSchema, async c => {
    const { hash } = c.req.valid("json");
    const file = await getExistFileByHash(hash);

    return c.json({
      key: file?.key || null,
    });
  });
}
