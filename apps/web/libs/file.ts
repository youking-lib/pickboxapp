import { prisma } from "@/libs/prisma";

export function getExistFile(hash: string) {
  return prisma.file.findUnique({
    where: {
      hash,
    },
  });
}
