import { md5 } from "js-md5";
import { chunk } from "lodash-es";
import { fileApi, axios } from "@repo/api-client/src";
import { Model, StateSelectors, UploadingFile } from "../model";
import { UploadModifier } from "../model-modifiers";

type onProgressEvent = { progress: number; rate: number };
type onProgress = (event: onProgressEvent) => void;
type ChunkUploadingFiles = {
  chunkSize?: number;
  onProgress?: (uploadingFile: UploadingFile, event: onProgressEvent) => void;
  onSuccess?: (
    uploadingFile: UploadingFile,
    result: UploadSuccessResult
  ) => void;
  onError?: (uploadingFile: UploadingFile, result: UploadErrorResult) => void;
};

export const UploadAction = {
  async chunkUploadingFiles(
    model: Model,
    { chunkSize = 2, onError, onProgress, onSuccess }: ChunkUploadingFiles = {}
  ) {
    const token = "";
    const uploadingFiles = StateSelectors.getUploadingFilesByStatus(
      model.state,
      "pending"
    );

    const fileToUploadingFile = new Map<File, UploadingFile>();

    const files = uploadingFiles.map(uploadingFile => {
      fileToUploadingFile.set(uploadingFile.file, uploadingFile);
      return uploadingFile.file;
    });

    await chunkUploadFilesForToken(files, token, {
      chunkSize,
      onError(file, result) {
        const uploadingFile = fileToUploadingFile.get(file)!;

        onError?.(uploadingFile, result);

        model.dispatch(state =>
          UploadModifier.onUploadError(state, uploadingFile)
        );
      },
      onProgress(file, event) {
        const uploadingFile = fileToUploadingFile.get(file)!;

        onProgress?.(uploadingFile, event);

        model.dispatch(state =>
          UploadModifier.onUploading(
            state,
            uploadingFile,
            event.progress,
            event.rate
          )
        );
      },
      onSuccess(file, result) {
        const uploadingFile = fileToUploadingFile.get(file)!;

        onSuccess?.(uploadingFile, result);

        model.dispatch(state =>
          UploadModifier.onUploadSuccess(state, uploadingFile)
        );
      },
    });
  },
};

type UploadSuccessResult = Awaited<ReturnType<typeof uploadFileForToken>>;
type UploadErrorResult = { message: string };

type ChunkUploadFilesForTokenOptions = {
  onProgress?: (file: File, event: onProgressEvent) => void;
  onSuccess?: (file: File, result: UploadSuccessResult) => void;
  onError?: (file: File, result: UploadErrorResult) => void;
  chunkSize?: number;
};

export async function chunkUploadFilesForToken(
  files: File[],
  token: string,
  {
    onProgress,
    onSuccess,
    onError,
    chunkSize = 2,
  }: ChunkUploadFilesForTokenOptions = {}
) {
  const chunks = chunk(files, chunkSize);
  let results = [];

  for (let chunked of chunks) {
    const promises = chunked.map(async file => {
      try {
        const result = await uploadFileForToken(file, token, event => {
          onProgress?.(file, event);
        });

        onSuccess?.(file, result);

        return result;
      } catch (err: any) {
        onError?.(file, {
          message: err,
        });

        return null;
      }
    });

    const result = await Promise.all(promises);

    results.push(...result);
  }

  return results;
}

export async function uploadFileForToken(
  file: File,
  token: string,
  onProgress?: onProgress
) {
  const hash = await fileToMd5(file);
  let key = await getFileKeyByHash(hash);

  if (!key) {
    key = await getFileKeyByUpload(file, onProgress);
  }

  onProgress?.({
    rate: 0,
    progress: 1,
  });

  const res = await fileApi.appendFileRoute({
    name: file.name,
    size: file.size,
    type: file.type,
    hash,
    key,
  });

  return res.data;
}

async function getFileKeyByHash(hash: string) {
  const preHashRes = await fileApi.preHash({
    hash,
  });

  return preHashRes.data.key;
}

async function getFileKeyByUpload(file: File, onProgress?: onProgress) {
  const preSignRes = await fileApi.uploadPreSign({
    filename: file.name,
  });

  const uploadRes = await axios({
    url: preSignRes.data.url,
    method: "PUT",
    data: file,
    headers: { "Content-Type": file.type },
    onUploadProgress({ progress, rate }) {
      onProgress?.({
        progress: progress || 0,
        rate: rate || 0, // bytes/s
      });
    },
  });

  if (uploadRes.status !== 200) {
    throw new Error("Upload Error: " + uploadRes.statusText);
  }

  onProgress?.({
    progress: 1,
    rate: 0,
  });

  return preSignRes.data.key;
}

async function fileToMd5(file: File) {
  const buffer = await file.arrayBuffer();
  return md5(buffer);
}
