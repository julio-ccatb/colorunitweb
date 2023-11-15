-- AlterTable
ALTER TABLE `regcol` ADD COLUMN `tbaseId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Regcol` ADD CONSTRAINT `Regcol_tbaseId_fkey` FOREIGN KEY (`tbaseId`) REFERENCES `Tbase`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
