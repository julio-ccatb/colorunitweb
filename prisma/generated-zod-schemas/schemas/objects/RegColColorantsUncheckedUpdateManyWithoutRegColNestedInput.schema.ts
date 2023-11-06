import { z } from 'zod';
import { RegColColorantsCreateWithoutRegColInputObjectSchema } from './RegColColorantsCreateWithoutRegColInput.schema';
import { RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutRegColInput.schema';
import { RegColColorantsCreateOrConnectWithoutRegColInputObjectSchema } from './RegColColorantsCreateOrConnectWithoutRegColInput.schema';
import { RegColColorantsUpsertWithWhereUniqueWithoutRegColInputObjectSchema } from './RegColColorantsUpsertWithWhereUniqueWithoutRegColInput.schema';
import { RegColColorantsCreateManyRegColInputEnvelopeObjectSchema } from './RegColColorantsCreateManyRegColInputEnvelope.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsUpdateWithWhereUniqueWithoutRegColInputObjectSchema } from './RegColColorantsUpdateWithWhereUniqueWithoutRegColInput.schema';
import { RegColColorantsUpdateManyWithWhereWithoutRegColInputObjectSchema } from './RegColColorantsUpdateManyWithWhereWithoutRegColInput.schema';
import { RegColColorantsScalarWhereInputObjectSchema } from './RegColColorantsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUncheckedUpdateManyWithoutRegColNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColColorantsCreateWithoutRegColInputObjectSchema),
          z
            .lazy(() => RegColColorantsCreateWithoutRegColInputObjectSchema)
            .array(),
          z.lazy(
            () => RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RegColColorantsCreateOrConnectWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsCreateOrConnectWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RegColColorantsUpsertWithWhereUniqueWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUpsertWithWhereUniqueWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegColColorantsCreateManyRegColInputEnvelopeObjectSchema)
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
              RegColColorantsUpdateWithWhereUniqueWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUpdateWithWhereUniqueWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RegColColorantsUpdateManyWithWhereWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUpdateManyWithWhereWithoutRegColInputObjectSchema,
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

export const RegColColorantsUncheckedUpdateManyWithoutRegColNestedInputObjectSchema =
  Schema;
