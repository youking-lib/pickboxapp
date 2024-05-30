import { immerable, produce } from "immer";

export type ViewStateVariant = "default" | "uploading";

export class ModelState {
  [immerable] = true;

  viewState = {
    variant: "default" as ViewStateVariant,

    uploading: {
      uploadFiles: [] as File[],
    },
  };

  static set(state: ModelState, recipe: (draft: ModelState) => void) {
    return produce(state, recipe);
  }
}
