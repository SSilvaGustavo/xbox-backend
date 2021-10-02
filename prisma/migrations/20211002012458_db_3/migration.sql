/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `genre` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `genre` MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Genre_name_key` ON `Genre`(`name`);
