/*
  Warnings:

  - Made the column `reforiginal` on table `base` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slang` on table `base` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Base` MODIFY `reforiginal` VARCHAR(191) NOT NULL,
    MODIFY `slang` VARCHAR(191) NOT NULL;
