import { prisma } from "@/libs/prisma";
import { Prisma } from "@prisma/client";

export function getExistFile(hash: string) {
  return prisma.file.findUnique({
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
