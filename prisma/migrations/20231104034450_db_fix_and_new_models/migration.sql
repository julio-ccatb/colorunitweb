-- CreateTable
CREATE TABLE `Colorant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `shortcode` VARCHAR(191) NOT NULL,
    `basecodi` INTEGER NOT NULL,
    `gramUP` DOUBLE NOT NULL,
    `gramUG` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TBase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `shortcode` VARCHAR(191) NOT NULL,
    `peso1` DOUBLE NULL,
    `peso2` DOUBLE NULL,
    `peso3` DOUBLE NULL,
    `peso4` DOUBLE NULL,
    `peso5` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Base` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reforiginal` VARCHAR(191) NULL,
    `tbaseId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegCol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NULL,
    `carta` INTEGER NULL,
    `R` INTEGER NOT NULL,
    `G` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,
    `pesopromedio` DOUBLE NULL,
    `brillo` DOUBLE NULL,
    `active` BOOLEAN NULL,
    `coeficienteG` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegColColorants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `regColId` INTEGER NOT NULL,
    `colorantId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegColBases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `regColId` INTEGER NOT NULL,
    `baseId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Base` ADD CONSTRAINT `Base_tbaseId_fkey` FOREIGN KEY (`tbaseId`) REFERENCES `TBase`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegColColorants` ADD CONSTRAINT `RegColColorants_regColId_fkey` FOREIGN KEY (`regColId`) REFERENCES `RegCol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegColColorants` ADD CONSTRAINT `RegColColorants_colorantId_fkey` FOREIGN KEY (`colorantId`) REFERENCES `Colorant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegColBases` ADD CONSTRAINT `RegColBases_regColId_fkey` FOREIGN KEY (`regColId`) REFERENCES `RegCol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegColBases` ADD CONSTRAINT `RegColBases_baseId_fkey` FOREIGN KEY (`baseId`) REFERENCES `Base`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
