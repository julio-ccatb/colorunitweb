import { z } from 'zod';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsUpdateWithoutColorantInputObjectSchema } from './RegColColorantsUpdateWithoutColorantInput.schema';
import { RegColColorantsUncheckedUpdateWithoutColorantInputObjectSchema } from './RegColColorantsUncheckedUpdateWithoutColorantInput.schema';
import { RegColColorantsCreateWithoutColorantInputObjectSchema } from './RegColColorantsCreateWithoutColorantInput.schema';
import { RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutColorantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpsertWithWhereUniqueWithoutColorantInput> =
  z
    .object({
      where: z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RegColColorantsUpdateWithoutColorantInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedUpdateWithoutColorantInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RegColColorantsCreateWithoutColorantInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColColorantsUpsertWithWhereUniqueWithoutColorantInputObjectSchema =
  Schema;
