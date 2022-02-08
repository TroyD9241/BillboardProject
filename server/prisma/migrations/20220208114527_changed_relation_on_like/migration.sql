/*
  Warnings:

  - You are about to drop the column `userId` on the `Track` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_userId_fkey";

-- DropIndex
DROP INDEX "Like_userId_trackId_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "userId";
