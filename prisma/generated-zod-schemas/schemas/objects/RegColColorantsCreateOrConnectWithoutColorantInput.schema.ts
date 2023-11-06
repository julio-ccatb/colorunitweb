import { z } from 'zod';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsCreateWithoutColorantInputObjectSchema } from './RegColColorantsCreateWithoutColorantInput.schema';
import { RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutColorantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateOrConnectWithoutColorantInput> =
  z
    .object({
      where: z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RegColColorantsCreateWithoutColorantInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColColorantsCreateOrConnectWithoutColorantInputObjectSchema =
  Schema;
