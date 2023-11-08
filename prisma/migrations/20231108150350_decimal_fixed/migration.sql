/*
  Warnings:

  - You are about to alter the column `pesopromedio` on the `regcol` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `brillo` on the `regcol` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `peso1` on the `tbase` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `peso2` on the `tbase` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `peso3` on the `tbase` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `peso4` on the `tbase` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.
  - You are about to alter the column `peso5` on the `tbase` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(65,2)`.

*/
-- AlterTable
ALTER TABLE `RegCol` MODIFY `pesopromedio` DECIMAL(65, 2) NULL,
    MODIFY `brillo` DECIMAL(65, 2) NULL;

-- AlterTable
ALTER TABLE `TBase` MODIFY `peso1` DECIMAL(65, 2) NULL,
    MODIFY `peso2` DECIMAL(65, 2) NULL,
    MODIFY `peso3` DECIMAL(65, 2) NULL,
    MODIFY `peso4` DECIMAL(65, 2) NULL,
    MODIFY `peso5` DECIMAL(65, 2) NULL;
