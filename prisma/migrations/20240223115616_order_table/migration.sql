-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `regcolId` INTEGER NOT NULL,
    `amaunt` DECIMAL(65, 30) NOT NULL,

    INDEX `Order_regcolId_idx`(`regcolId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
