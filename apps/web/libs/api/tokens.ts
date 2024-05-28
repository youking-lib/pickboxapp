import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";
import { customAlphabet } from "nanoid";

const uuid = customAlphabet("1234567890abcdef", 6);

export async function createToken(
  data: Pick<Prisma.TokenCreateInput, "expires" | "user">
) {
  const token = await prisma.token.create({
    data: {
      expires: data.expires,
      user: data.user,
      token: uuid(),
    },
  });

  return token;
}
