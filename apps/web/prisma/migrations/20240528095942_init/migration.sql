/*
  Warnings:

  - You are about to drop the column `lastUsed` on the `Token` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `File_hash_key` ON `File`;

-- DropIndex
DROP INDEX `File_key_key` ON `File`;

-- AlterTable
ALTER TABLE `Token` DROP COLUMN `lastUsed`;
