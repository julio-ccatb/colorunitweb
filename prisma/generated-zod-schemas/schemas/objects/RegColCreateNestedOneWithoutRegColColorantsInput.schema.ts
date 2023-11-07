import { z } from 'zod';
import { RegColCreateWithoutRegColColorantsInputObjectSchema } from './RegColCreateWithoutRegColColorantsInput.schema';
import { RegColUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './RegColUncheckedCreateWithoutRegColColorantsInput.schema';
import { RegColCreateOrConnectWithoutRegColColorantsInputObjectSchema } from './RegColCreateOrConnectWithoutRegColColorantsInput.schema';
import { RegColWhereUniqueInputObjectSchema } from './RegColWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCreateNestedOneWithoutRegColColorantsInput> =
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
      connect: z.lazy(() => RegColWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const RegColCreateNestedOneWithoutRegColColorantsInputObjectSchema =
  Schema;
