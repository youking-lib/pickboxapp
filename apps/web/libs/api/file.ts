import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";

export function getExistFileByHash(hash: string) {
  return prisma.file.findFirst({
    where: {
      hash,
    },
  });
}

export async function appendFileForToken(file: Prisma.FileCreateInput) {
  return await prisma.file.create({
    data: file,
  });
}
