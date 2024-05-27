import { AppendFileBodySchema } from "@/libs/openapi";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = AppendFileBodySchema.parse(await req.json());
}
