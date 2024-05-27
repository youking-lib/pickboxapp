import { NextRequest } from "next/server";

export function PATCH(req: NextRequest, params: { linkId: string }) {
  console.log(params);
}
