import { z } from 'zod';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsCreateWithoutRegColInputObjectSchema } from './RegColColorantsCreateWithoutRegColInput.schema';
import { RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateOrConnectWithoutRegColInput> =
  z
    .object({
      where: z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RegColColorantsCreateWithoutRegColInputObjectSchema),
        z.lazy(
          () => RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColColorantsCreateOrConnectWithoutRegColInputObjectSchema =
  Schema;
