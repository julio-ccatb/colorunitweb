import { z } from 'zod';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsUpdateWithoutRegColInputObjectSchema } from './RegColColorantsUpdateWithoutRegColInput.schema';
import { RegColColorantsUncheckedUpdateWithoutRegColInputObjectSchema } from './RegColColorantsUncheckedUpdateWithoutRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpdateWithWhereUniqueWithoutRegColInput> =
  z
    .object({
      where: z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RegColColorantsUpdateWithoutRegColInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedUpdateWithoutRegColInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColColorantsUpdateWithWhereUniqueWithoutRegColInputObjectSchema =
  Schema;
