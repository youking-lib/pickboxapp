import axios from "axios";
import { File } from "./generate/File";
import { Token } from "./generate/Token";
import { ApiConfig } from "./generate/http-client";

const config: ApiConfig = {
  baseURL: "/api",
};

export const fileApi = new File(config);
export const tokenApi = new Token(config);

export { axios };
