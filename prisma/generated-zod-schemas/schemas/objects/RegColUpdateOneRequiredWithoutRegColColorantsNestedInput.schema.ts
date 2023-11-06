import { z } from 'zod';
import { RegColCreateWithoutRegColColorantsInputObjectSchema } from './RegColCreateWithoutRegColColorantsInput.schema';
import { RegColUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './RegColUncheckedCreateWithoutRegColColorantsInput.schema';
import { RegColCreateOrConnectWithoutRegColColorantsInputObjectSchema } from './RegColCreateOrConnectWithoutRegColColorantsInput.schema';
import { RegColUpsertWithoutRegColColorantsInputObjectSchema } from './RegColUpsertWithoutRegColColorantsInput.schema';
import { RegColWhereUniqueInputObjectSchema } from './RegColWhereUniqueInput.schema';
import { RegColUpdateWithoutRegColColorantsInputObjectSchema } from './RegColUpdateWithoutRegColColorantsInput.schema';
import { RegColUncheckedUpdateWithoutRegColColorantsInputObjectSchema } from './RegColUncheckedUpdateWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColUpdateOneRequiredWithoutRegColColorantsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColCreateWithoutRegColColorantsInputObjectSchema),
          z.lazy(
            () => RegColUncheckedCreateWithoutRegColColorantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => RegColCreateOrConnectWithoutRegColColorantsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => RegColUpsertWithoutRegColColorantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RegColWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RegColUpdateWithoutRegColColorantsInputObjectSchema),
          z.lazy(
            () => RegColUncheckedUpdateWithoutRegColColorantsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const RegColUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema =
  Schema;
