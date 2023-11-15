/*
  Warnings:

  - You are about to alter the column `coeficienteG` on the `regcol` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `amount` on the `regcolbases` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `amount` on the `regcolcolorants` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.

*/
-- AlterTable
ALTER TABLE `regcol` MODIFY `coeficienteG` DECIMAL(65, 2) NULL;

-- AlterTable
ALTER TABLE `regcolbases` MODIFY `amount` DECIMAL(65, 2) NOT NULL;

-- AlterTable
ALTER TABLE `regcolcolorants` MODIFY `amount` DECIMAL(65, 2) NOT NULL;
