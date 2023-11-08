/*
  Warnings:

  - You are about to alter the column `gramUP` on the `colorant` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `gramUG` on the `colorant` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.

*/
-- AlterTable
ALTER TABLE `colorant` MODIFY `gramUP` DECIMAL(65, 2) NOT NULL,
    MODIFY `gramUG` DECIMAL(65, 2) NOT NULL;
