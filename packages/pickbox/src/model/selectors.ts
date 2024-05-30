import { ModelState } from "./state";

export const getUploadingState = (state: ModelState) =>
  state.viewState.uploading;

export const getViewVariant = (state: ModelState) => state.viewState.variant;
