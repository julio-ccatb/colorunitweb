import { z } from 'zod';
import { BaseCreateWithoutTbaseInputObjectSchema } from './BaseCreateWithoutTbaseInput.schema';
import { BaseUncheckedCreateWithoutTbaseInputObjectSchema } from './BaseUncheckedCreateWithoutTbaseInput.schema';
import { BaseCreateOrConnectWithoutTbaseInputObjectSchema } from './BaseCreateOrConnectWithoutTbaseInput.schema';
import { BaseUpsertWithWhereUniqueWithoutTbaseInputObjectSchema } from './BaseUpsertWithWhereUniqueWithoutTbaseInput.schema';
import { BaseCreateManyTbaseInputEnvelopeObjectSchema } from './BaseCreateManyTbaseInputEnvelope.schema';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';
import { BaseUpdateWithWhereUniqueWithoutTbaseInputObjectSchema } from './BaseUpdateWithWhereUniqueWithoutTbaseInput.schema';
import { BaseUpdateManyWithWhereWithoutTbaseInputObjectSchema } from './BaseUpdateManyWithWhereWithoutTbaseInput.schema';
import { BaseScalarWhereInputObjectSchema } from './BaseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUncheckedUpdateManyWithoutTbaseNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => BaseUpsertWithWhereUniqueWithoutTbaseInputObjectSchema),
          z
            .lazy(() => BaseUpsertWithWhereUniqueWithoutTbaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BaseCreateManyTbaseInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BaseWhereUniqueInputObjectSchema),
          z.lazy(() => BaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BaseWhereUniqueInputObjectSchema),
          z.lazy(() => BaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BaseWhereUniqueInputObjectSchema),
          z.lazy(() => BaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BaseWhereUniqueInputObjectSchema),
          z.lazy(() => BaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => BaseUpdateWithWhereUniqueWithoutTbaseInputObjectSchema),
          z
            .lazy(() => BaseUpdateWithWhereUniqueWithoutTbaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => BaseUpdateManyWithWhereWithoutTbaseInputObjectSchema),
          z
            .lazy(() => BaseUpdateManyWithWhereWithoutTbaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BaseScalarWhereInputObjectSchema),
          z.lazy(() => BaseScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BaseUncheckedUpdateManyWithoutTbaseNestedInputObjectSchema =
  Schema;
