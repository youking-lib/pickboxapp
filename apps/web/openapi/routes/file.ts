import { OpenAPIHono } from "@hono/zod-openapi";
import { AppendFileRouteSchema, UploadPreSignRouteSchema } from "./file.schema";

export function file(api: OpenAPIHono) {
  api.openapi(AppendFileRouteSchema, async c => {
    return c.json({
      message: "Index",
    });
  });

  api.openapi(UploadPreSignRouteSchema, c => {
    return c.json({
      url: "",
      key: "",
    });
  });
}
