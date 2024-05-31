import { ModelState } from "./state";

let uuid = 0;

export function setUploadFiles(state: ModelState, files: File[]) {
  return ModelState.set(state, draft => {
    draft.viewState.uploading.uploadFiles = files.map(item => {
      return {
        id: uuid++,
        progress: 0,
        file: item,
        status: "pending",
      };
    });
    draft.viewState.variant = "uploading";
  });
}
