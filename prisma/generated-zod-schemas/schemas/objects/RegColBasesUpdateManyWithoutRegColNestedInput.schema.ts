import { z } from 'zod';
import { RegColBasesCreateWithoutRegColInputObjectSchema } from './RegColBasesCreateWithoutRegColInput.schema';
import { RegColBasesUncheckedCreateWithoutRegColInputObjectSchema } from './RegColBasesUncheckedCreateWithoutRegColInput.schema';
import { RegColBasesCreateOrConnectWithoutRegColInputObjectSchema } from './RegColBasesCreateOrConnectWithoutRegColInput.schema';
import { RegColBasesUpsertWithWhereUniqueWithoutRegColInputObjectSchema } from './RegColBasesUpsertWithWhereUniqueWithoutRegColInput.schema';
import { RegColBasesCreateManyRegColInputEnvelopeObjectSchema } from './RegColBasesCreateManyRegColInputEnvelope.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesUpdateWithWhereUniqueWithoutRegColInputObjectSchema } from './RegColBasesUpdateWithWhereUniqueWithoutRegColInput.schema';
import { RegColBasesUpdateManyWithWhereWithoutRegColInputObjectSchema } from './RegColBasesUpdateManyWithWhereWithoutRegColInput.schema';
import { RegColBasesScalarWhereInputObjectSchema } from './RegColBasesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpdateManyWithoutRegColNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColBasesCreateWithoutRegColInputObjectSchema),
          z.lazy(() => RegColBasesCreateWithoutRegColInputObjectSchema).array(),
          z.lazy(
            () => RegColBasesUncheckedCreateWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () => RegColBasesUncheckedCreateWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RegColBasesCreateOrConnectWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () => RegColBasesCreateOrConnectWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RegColBasesUpsertWithWhereUniqueWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColBasesUpsertWithWhereUniqueWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegColBasesCreateManyRegColInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RegColBasesUpdateWithWhereUniqueWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColBasesUpdateWithWhereUniqueWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RegColBasesUpdateManyWithWhereWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColBasesUpdateManyWithWhereWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RegColBasesScalarWhereInputObjectSchema),
          z.lazy(() => RegColBasesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegColBasesUpdateManyWithoutRegColNestedInputObjectSchema = Schema;
