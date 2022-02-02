/*
  Warnings:

  - You are about to drop the column `album` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Track` table. All the data in the column will be lost.
  - Added the required column `region` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "album",
DROP COLUMN "genre",
ADD COLUMN     "region" TEXT NOT NULL;
