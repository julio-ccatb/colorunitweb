import { z } from 'zod';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsUpdateWithoutColorantInputObjectSchema } from './RegColColorantsUpdateWithoutColorantInput.schema';
import { RegColColorantsUncheckedUpdateWithoutColorantInputObjectSchema } from './RegColColorantsUncheckedUpdateWithoutColorantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpdateWithWhereUniqueWithoutColorantInput> =
  z
    .object({
      where: z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RegColColorantsUpdateWithoutColorantInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedUpdateWithoutColorantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColColorantsUpdateWithWhereUniqueWithoutColorantInputObjectSchema =
  Schema;
