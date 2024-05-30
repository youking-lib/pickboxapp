import { ModelState } from "./state";

export function setUploadFiles(state: ModelState, files: File[]) {
  return ModelState.set(state, draft => {
    draft.viewState.uploading.uploadFiles = files;
    draft.viewState.variant = "uploading";
  });
}
