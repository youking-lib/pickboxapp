import { ModelState, UploadingFile } from "./state";

export const getViewVariant = (state: ModelState) => state.viewState.variant;

export const getUploadingFiles = (state: ModelState) =>
  state.viewState.uploading.uploadFiles;

export const getUploadingToken = (state: ModelState) =>
  state.viewState.uploading.token;

export const getUploadingFilesByStatus = (
  state: ModelState,
  status: UploadingFile["status"]
) => {
  return getUploadingFiles(state).filter(item => item.status === status);
};

export const getUploadingFileById = (state: ModelState, id: number) =>
  getUploadingFiles(state).find(item => item.id === id);
