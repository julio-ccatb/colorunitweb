import { z } from 'zod';
import { RegColUpdateWithoutRegColColorantsInputObjectSchema } from './RegColUpdateWithoutRegColColorantsInput.schema';
import { RegColUncheckedUpdateWithoutRegColColorantsInputObjectSchema } from './RegColUncheckedUpdateWithoutRegColColorantsInput.schema';
import { RegColCreateWithoutRegColColorantsInputObjectSchema } from './RegColCreateWithoutRegColColorantsInput.schema';
import { RegColUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './RegColUncheckedCreateWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColUpsertWithoutRegColColorantsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RegColUpdateWithoutRegColColorantsInputObjectSchema),
      z.lazy(
        () => RegColUncheckedUpdateWithoutRegColColorantsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => RegColCreateWithoutRegColColorantsInputObjectSchema),
      z.lazy(
        () => RegColUncheckedCreateWithoutRegColColorantsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const RegColUpsertWithoutRegColColorantsInputObjectSchema = Schema;
