-- CreateTable
CREATE TABLE `Customer` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `isCompany` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Customer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Extended` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `brillo` DECIMAL(65, 2) NULL,
    `R` DECIMAL(65, 2) NOT NULL,
    `G` DECIMAL(65, 2) NOT NULL,
    `B` DECIMAL(65, 2) NOT NULL,
    `HEX` VARCHAR(191) NULL,
    `tbaseId` INTEGER NULL,
    `customerId` VARCHAR(191) NOT NULL,

    INDEX `Extended_tbaseId_idx`(`tbaseId`),
    INDEX `Extended_customerId_idx`(`customerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExtendedOnRegCol` (
    `id` INTEGER NOT NULL,
    `regcolId` INTEGER NOT NULL,
    `extendedId` INTEGER NOT NULL,

    INDEX `ExtendedOnRegCol_regcolId_idx`(`regcolId`),
    INDEX `ExtendedOnRegCol_extendedId_idx`(`extendedId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
