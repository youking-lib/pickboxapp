import { createDocument } from "zod-openapi";
import { openApiErrorResponses } from "./response";
import { tokensPaths } from "./tokens";

const API_DOMAIN = "pickbox.app";

export * from "./tokens";

export const document = createDocument({
  openapi: "3.0.3",
  info: {
    title: "pickbox.app API",
    description: "pickbox.app.",
    version: "0.0.1",
    contact: {
      name: "pickbox.app Support",
      email: "support@pickbox.app",
      url: "https://pickbox.app/api",
    },
    license: {
      name: "AGPL-3.0 license",
      url: "https://github.com/youking-lib/pickbox/blob/main/LICENSE.md",
    },
  },
  servers: [
    {
      url: API_DOMAIN,
      description: "Production API",
    },
  ],
  paths: {
    ...tokensPaths,
  },
  components: {
    schemas: {},
    securitySchemes: {
      token: {
        type: "http",
        description: "Default authentication mechanism",
        scheme: "bearer",
        "x-speakeasy-example": "DUB_API_KEY",
      },
    },
    responses: {
      ...openApiErrorResponses,
    },
  },
});
