import { z } from 'zod';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsUpdateWithoutRegColInputObjectSchema } from './RegColColorantsUpdateWithoutRegColInput.schema';
import { RegColColorantsUncheckedUpdateWithoutRegColInputObjectSchema } from './RegColColorantsUncheckedUpdateWithoutRegColInput.schema';
import { RegColColorantsCreateWithoutRegColInputObjectSchema } from './RegColColorantsCreateWithoutRegColInput.schema';
import { RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpsertWithWhereUniqueWithoutRegColInput> =
  z
    .object({
      where: z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RegColColorantsUpdateWithoutRegColInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedUpdateWithoutRegColInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RegColColorantsCreateWithoutRegColInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColColorantsUpsertWithWhereUniqueWithoutRegColInputObjectSchema =
  Schema;
