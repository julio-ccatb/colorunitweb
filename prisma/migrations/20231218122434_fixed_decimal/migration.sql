/*
  Warnings:

  - You are about to alter the column `peso` on the `base` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.

*/
-- AlterTable
ALTER TABLE `base` MODIFY `peso` DECIMAL(65, 2) NOT NULL;
