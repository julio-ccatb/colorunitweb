import { z } from 'zod';
import { ColorantCreateWithoutRegColColorantsInputObjectSchema } from './ColorantCreateWithoutRegColColorantsInput.schema';
import { ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './ColorantUncheckedCreateWithoutRegColColorantsInput.schema';
import { ColorantCreateOrConnectWithoutRegColColorantsInputObjectSchema } from './ColorantCreateOrConnectWithoutRegColColorantsInput.schema';
import { ColorantUpsertWithoutRegColColorantsInputObjectSchema } from './ColorantUpsertWithoutRegColColorantsInput.schema';
import { ColorantWhereUniqueInputObjectSchema } from './ColorantWhereUniqueInput.schema';
import { ColorantUpdateWithoutRegColColorantsInputObjectSchema } from './ColorantUpdateWithoutRegColColorantsInput.schema';
import { ColorantUncheckedUpdateWithoutRegColColorantsInputObjectSchema } from './ColorantUncheckedUpdateWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantUpdateOneRequiredWithoutRegColColorantsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ColorantCreateWithoutRegColColorantsInputObjectSchema),
          z.lazy(
            () =>
              ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ColorantCreateOrConnectWithoutRegColColorantsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ColorantUpsertWithoutRegColColorantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ColorantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ColorantUpdateWithoutRegColColorantsInputObjectSchema),
          z.lazy(
            () =>
              ColorantUncheckedUpdateWithoutRegColColorantsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ColorantUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema =
  Schema;
