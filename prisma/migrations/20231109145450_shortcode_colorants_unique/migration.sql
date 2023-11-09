/*
  Warnings:

  - A unique constraint covering the columns `[shortcode]` on the table `Colorant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Colorant_shortcode_key` ON `Colorant`(`shortcode`);
