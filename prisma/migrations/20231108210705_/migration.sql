/*
  Warnings:

  - You are about to drop the `RegCol` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegColBases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegColColorants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Base` DROP FOREIGN KEY `Base_tbaseId_fkey`;

-- DropForeignKey
ALTER TABLE `RegColBases` DROP FOREIGN KEY `RegColBases_baseId_fkey`;

-- DropForeignKey
ALTER TABLE `RegColBases` DROP FOREIGN KEY `RegColBases_regColId_fkey`;

-- DropForeignKey
ALTER TABLE `RegColColorants` DROP FOREIGN KEY `RegColColorants_colorantId_fkey`;

-- DropForeignKey
ALTER TABLE `RegColColorants` DROP FOREIGN KEY `RegColColorants_regColId_fkey`;

-- DropTable
DROP TABLE `RegCol`;

-- DropTable
DROP TABLE `RegColBases`;

-- DropTable
DROP TABLE `RegColColorants`;

-- DropTable
DROP TABLE `TBase`;

-- CreateTable
CREATE TABLE `Regcol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NULL,
    `carta` INTEGER NULL,
    `R` INTEGER NOT NULL,
    `G` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,
    `pesopromedio` DECIMAL(65, 2) NULL,
    `brillo` DECIMAL(65, 2) NULL,
    `active` BOOLEAN NULL,
    `coeficienteG` DECIMAL(65, 30) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regcolbases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `regColId` INTEGER NOT NULL,
    `baseId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,

    INDEX `RegColBases_baseId_fkey`(`baseId`),
    INDEX `RegColBases_regColId_fkey`(`regColId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regcolcolorants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `regColId` INTEGER NOT NULL,
    `colorantId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,

    INDEX `RegColColorants_colorantId_fkey`(`colorantId`),
    INDEX `RegColColorants_regColId_fkey`(`regColId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tbase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `shortcode` VARCHAR(191) NOT NULL,
    `peso1` DECIMAL(65, 2) NULL,
    `peso2` DECIMAL(65, 2) NULL,
    `peso3` DECIMAL(65, 2) NULL,
    `peso4` DECIMAL(65, 2) NULL,
    `peso5` DECIMAL(65, 2) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `TBase_shortcode_key`(`shortcode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Base` ADD CONSTRAINT `Base_tbaseId_fkey` FOREIGN KEY (`tbaseId`) REFERENCES `Tbase`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regcolbases` ADD CONSTRAINT `RegColBases_baseId_fkey` FOREIGN KEY (`baseId`) REFERENCES `Base`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regcolbases` ADD CONSTRAINT `RegColBases_regColId_fkey` FOREIGN KEY (`regColId`) REFERENCES `Regcol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regcolcolorants` ADD CONSTRAINT `RegColColorants_colorantId_fkey` FOREIGN KEY (`colorantId`) REFERENCES `Colorant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regcolcolorants` ADD CONSTRAINT `RegColColorants_regColId_fkey` FOREIGN KEY (`regColId`) REFERENCES `Regcol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
