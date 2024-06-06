import { immerable, produce } from "immer";
import { tokenApi } from "@repo/api-client/src";

export type ViewStateVariant = "default" | "uploading";
export type UploadingFile = {
  id: number;
  file: File;
  progress: number;
  rate: number;
  status: "pending" | "uploading" | "success" | "error";
};

export type Token = Pick<
  Awaited<ReturnType<typeof tokenApi.createTokenRouteSchema>>["data"],
  "id" | "token" | "expires"
>;

export class ModelState {
  [immerable] = true;

  viewState = {
    variant: "default" as ViewStateVariant,

    uploading: {
      token: null as null | Token,
      uploadFiles: [] as UploadingFile[],
    },
  };

  static set(state: ModelState, recipe: (draft: ModelState) => void) {
    return produce(state, recipe);
  }
}
