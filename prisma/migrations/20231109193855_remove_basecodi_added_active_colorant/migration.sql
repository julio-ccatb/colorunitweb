/*
  Warnings:

  - You are about to drop the column `basecodi` on the `colorant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `colorant` DROP COLUMN `basecodi`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;
