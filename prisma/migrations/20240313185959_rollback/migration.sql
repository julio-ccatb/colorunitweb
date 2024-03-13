/*
  Warnings:

  - Made the column `lastName` on table `customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `customer` MODIFY `lastName` VARCHAR(191) NOT NULL;
