/*
  Warnings:

  - You are about to alter the column `R` on the `extended` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,2)` to `Int`.
  - You are about to alter the column `G` on the `extended` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,2)` to `Int`.
  - You are about to alter the column `B` on the `extended` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,2)` to `Int`.

*/
-- AlterTable
ALTER TABLE `extended` MODIFY `R` INTEGER NOT NULL,
    MODIFY `G` INTEGER NOT NULL,
    MODIFY `B` INTEGER NOT NULL;
