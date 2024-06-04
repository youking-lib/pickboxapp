import { ModelState, StateSelectors, UploadingFile } from "../model";

let uuid = 0;

export const UploadModifier = {
  setUploadFiles(state: ModelState, files: File[]) {
    return ModelState.set(state, draft => {
      draft.viewState.uploading.uploadFiles = files.map(item => {
        return {
          id: uuid++,
          file: item,
          progress: 0,
          rate: 0,
          status: "pending",
        };
      });

      draft.viewState.variant = "uploading";
    });
  },

  onUploading(
    state: ModelState,
    uploadingFile: UploadingFile,
    progress: number,
    rate: number
  ) {
    return ModelState.set(state, draft => {
      const target = StateSelectors.getUploadingFileById(
        draft,
        uploadingFile.id
      );

      if (target) {
        target.status = "uploading";
        target.progress = progress;
        target.rate = rate;
      }
    });
  },

  onUploadSuccess(state: ModelState, uploadingFile: UploadingFile) {
    return ModelState.set(state, draft => {
      const target = StateSelectors.getUploadingFileById(
        draft,
        uploadingFile.id
      );

      if (target) {
        target.status = "success";
      }
    });
  },

  onUploadError(state: ModelState, uploadingFile: UploadingFile) {
    return ModelState.set(state, draft => {
      const target = StateSelectors.getUploadingFileById(
        draft,
        uploadingFile.id
      );

      if (target) {
        target.status = "error";
      }
    });
  },
};
