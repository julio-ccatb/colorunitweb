import { z } from 'zod';
import { ColorantUpdateWithoutRegColColorantsInputObjectSchema } from './ColorantUpdateWithoutRegColColorantsInput.schema';
import { ColorantUncheckedUpdateWithoutRegColColorantsInputObjectSchema } from './ColorantUncheckedUpdateWithoutRegColColorantsInput.schema';
import { ColorantCreateWithoutRegColColorantsInputObjectSchema } from './ColorantCreateWithoutRegColColorantsInput.schema';
import { ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './ColorantUncheckedCreateWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantUpsertWithoutRegColColorantsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ColorantUpdateWithoutRegColColorantsInputObjectSchema),
      z.lazy(
        () => ColorantUncheckedUpdateWithoutRegColColorantsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ColorantCreateWithoutRegColColorantsInputObjectSchema),
      z.lazy(
        () => ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ColorantUpsertWithoutRegColColorantsInputObjectSchema = Schema;
