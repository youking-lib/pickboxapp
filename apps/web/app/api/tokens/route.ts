import { createToken, success } from "@/libs/api";
import { CreateTokenBodySchema } from "@/libs/openapi";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = CreateTokenBodySchema.parse(await req.json());
  const token = await createToken({
    expires: body.expires,
  });

  return success(token);
}
