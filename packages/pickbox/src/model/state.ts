import { immerable, produce } from "immer";

export type ViewStateVariant = "default" | "uploading";
export type UploadingFile = {
  id: number;
  file: File;
  progress: number;
  rate: number;
  status: "pending" | "uploading" | "success" | "error";
};

export class ModelState {
  [immerable] = true;

  viewState = {
    variant: "default" as ViewStateVariant,

    uploading: {
      uploadFiles: [] as UploadingFile[],
    },
  };

  static set(state: ModelState, recipe: (draft: ModelState) => void) {
    return produce(state, recipe);
  }
}
