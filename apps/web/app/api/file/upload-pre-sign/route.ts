import { success } from "@/libs/api";
import { UploadFilePreSignBodySchema } from "@/libs/openapi";
import { getUploadFilePreSignedUrl } from "@/libs/storage";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = UploadFilePreSignBodySchema.parse(await req.json());
  const key = await getUploadFilePreSignedUrl(body.filename);

  return success({
    key,
  });
}
