import axios from "axios";
import { File } from "./generate/File";
import { Token } from "./generate/Token";

export const fileApi = new File();
export const tokenApi = new Token();

export { axios };
