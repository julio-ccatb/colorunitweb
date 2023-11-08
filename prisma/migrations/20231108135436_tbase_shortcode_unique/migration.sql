/*
  Warnings:

  - A unique constraint covering the columns `[shortcode]` on the table `TBase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `TBase_shortcode_key` ON `TBase`(`shortcode`);
