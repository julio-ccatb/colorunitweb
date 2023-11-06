import { z } from 'zod';
import { RegColWhereUniqueInputObjectSchema } from './RegColWhereUniqueInput.schema';
import { RegColCreateWithoutRegColColorantsInputObjectSchema } from './RegColCreateWithoutRegColColorantsInput.schema';
import { RegColUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './RegColUncheckedCreateWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCreateOrConnectWithoutRegColColorantsInput> =
  z
    .object({
      where: z.lazy(() => RegColWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RegColCreateWithoutRegColColorantsInputObjectSchema),
        z.lazy(
          () => RegColUncheckedCreateWithoutRegColColorantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColCreateOrConnectWithoutRegColColorantsInputObjectSchema =
  Schema;
