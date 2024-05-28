import { success } from "@/libs/api";
import { appendFileForToken } from "@/libs/api/file";
import { AppendFileBodySchema } from "@/libs/openapi";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = AppendFileBodySchema.parse(await req.json());

  const file = await appendFileForToken({
    key: body.key,
    hash: body.hash,
    name: "",
    path: "",
    size: 0,
    type: "",
  });

  return success(file);
}
