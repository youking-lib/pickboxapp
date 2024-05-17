import { generateApi } from "swagger-typescript-api";
import * as path from "path";

run();

async function run() {
  generateApi({
    name: "PickboxAPI",
    url: "http://127.0.0.1:3000/api",
    output: path.resolve(process.cwd(), "./src/generate"),
    httpClientType: "axios",
  });
}
