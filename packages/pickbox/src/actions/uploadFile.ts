import { md5 } from "js-md5";
import { fileApi, axios } from "@repo/api-client/src";

type onProgress = (event: { progress: number; rate: number }) => void;

export async function uploadFile(file: File, onProgress?: onProgress) {
  const { key, hash } = await getFileKeyOrUpload(file, onProgress);
  const res = await fileApi.appendFileRoute({
    name: file.name,
    size: file.size,
    type: file.type,
    hash,
    key,
  });

  return res.data;
}

async function getFileKeyOrUpload(file: File, onProgress?: onProgress) {
  const hash = await fileToMd5(file);
  const preHashRes = await fileApi.preHash({
    hash,
  });

  if (preHashRes.data.key) {
    onProgress?.({
      progress: 1,
      rate: 0,
    });
    return {
      key: preHashRes.data.key,
      hash,
    };
  }

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

  return {
    key: preSignRes.data.key,
    hash,
  };
}

async function fileToMd5(file: File) {
  const buffer = await file.arrayBuffer();
  return md5(buffer);
}
