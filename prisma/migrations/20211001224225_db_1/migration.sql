/*
  Warnings:

  - You are about to alter the column `imdb` on the `games` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - A unique constraint covering the columns `[title]` on the table `Games` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nickname]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `games` MODIFY `imdb` DOUBLE NOT NULL,
    MODIFY `linkyt` VARCHAR(191);

-- AlterTable
ALTER TABLE `profile` MODIFY `image` VARCHAR(191);

-- CreateIndex
CREATE UNIQUE INDEX `Games_title_key` ON `Games`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `Profile_nickname_key` ON `Profile`(`nickname`);
