import { z } from 'zod';
import { RegColColorantsCreateWithoutColorantInputObjectSchema } from './RegColColorantsCreateWithoutColorantInput.schema';
import { RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutColorantInput.schema';
import { RegColColorantsCreateOrConnectWithoutColorantInputObjectSchema } from './RegColColorantsCreateOrConnectWithoutColorantInput.schema';
import { RegColColorantsUpsertWithWhereUniqueWithoutColorantInputObjectSchema } from './RegColColorantsUpsertWithWhereUniqueWithoutColorantInput.schema';
import { RegColColorantsCreateManyColorantInputEnvelopeObjectSchema } from './RegColColorantsCreateManyColorantInputEnvelope.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsUpdateWithWhereUniqueWithoutColorantInputObjectSchema } from './RegColColorantsUpdateWithWhereUniqueWithoutColorantInput.schema';
import { RegColColorantsUpdateManyWithWhereWithoutColorantInputObjectSchema } from './RegColColorantsUpdateManyWithWhereWithoutColorantInput.schema';
import { RegColColorantsScalarWhereInputObjectSchema } from './RegColColorantsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpdateManyWithoutColorantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColColorantsCreateWithoutColorantInputObjectSchema),
          z
            .lazy(() => RegColColorantsCreateWithoutColorantInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              RegColColorantsCreateOrConnectWithoutColorantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsCreateOrConnectWithoutColorantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RegColColorantsUpsertWithWhereUniqueWithoutColorantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUpsertWithWhereUniqueWithoutColorantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegColColorantsCreateManyColorantInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RegColColorantsUpdateWithWhereUniqueWithoutColorantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUpdateWithWhereUniqueWithoutColorantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RegColColorantsUpdateManyWithWhereWithoutColorantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUpdateManyWithWhereWithoutColorantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RegColColorantsScalarWhereInputObjectSchema),
          z.lazy(() => RegColColorantsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegColColorantsUpdateManyWithoutColorantNestedInputObjectSchema =
  Schema;
