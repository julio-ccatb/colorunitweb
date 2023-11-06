import { z } from 'zod';
import { BaseCreateWithoutTbaseInputObjectSchema } from './BaseCreateWithoutTbaseInput.schema';
import { BaseUncheckedCreateWithoutTbaseInputObjectSchema } from './BaseUncheckedCreateWithoutTbaseInput.schema';
import { BaseCreateOrConnectWithoutTbaseInputObjectSchema } from './BaseCreateOrConnectWithoutTbaseInput.schema';
import { BaseCreateManyTbaseInputEnvelopeObjectSchema } from './BaseCreateManyTbaseInputEnvelope.schema';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUncheckedCreateNestedManyWithoutTbaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BaseCreateWithoutTbaseInputObjectSchema),
          z.lazy(() => BaseCreateWithoutTbaseInputObjectSchema).array(),
          z.lazy(() => BaseUncheckedCreateWithoutTbaseInputObjectSchema),
          z
            .lazy(() => BaseUncheckedCreateWithoutTbaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => BaseCreateOrConnectWithoutTbaseInputObjectSchema),
          z
            .lazy(() => BaseCreateOrConnectWithoutTbaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BaseCreateManyTbaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BaseWhereUniqueInputObjectSchema),
          z.lazy(() => BaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BaseUncheckedCreateNestedManyWithoutTbaseInputObjectSchema =
  Schema;
