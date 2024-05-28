import { nanoid } from "nanoid";
import * as path from "path";
import { HeadObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { CloudflareR2Constants } from "@/libs/constant";
import { S3Client } from "@aws-sdk/client-s3";

export const client = new S3Client({
  region: "auto",
  endpoint: `https://${CloudflareR2Constants.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: CloudflareR2Constants.R2_ACCESS_KEY_ID || "",
    secretAccessKey: CloudflareR2Constants.R2_SECRET_ACCESS_KEY || "",
  },
});

export async function getUploadFilePreSignedUrl(filename: string) {
  const key = getFullKey(`${nanoid()}${path.extname(filename)}`);
  return {
    url: await getPreSignedUrl(key),
    key,
  };
}

export async function getPreSignedUrl(key: string) {
  const preSignedUrl = await getSignedUrl(
    client,
    new GetObjectCommand({
      Bucket: CloudflareR2Constants.R2_BUCKET_NAME,
      Key: key,
    }),
    { expiresIn: 3600 }
  );
  return preSignedUrl;
}

export async function getMetaData(Key: string) {
  const res = await client.send(
    new HeadObjectCommand({
      Bucket: CloudflareR2Constants.R2_BUCKET_NAME,
      Key,
    })
  );

  return res;
}

export function getFullKey(filename: string) {
  return path.join(CloudflareR2Constants.BASE_PATH, filename);
}
