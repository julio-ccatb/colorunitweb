import { z } from 'zod';
import { RegColBasesCreateWithoutBaseInputObjectSchema } from './RegColBasesCreateWithoutBaseInput.schema';
import { RegColBasesUncheckedCreateWithoutBaseInputObjectSchema } from './RegColBasesUncheckedCreateWithoutBaseInput.schema';
import { RegColBasesCreateOrConnectWithoutBaseInputObjectSchema } from './RegColBasesCreateOrConnectWithoutBaseInput.schema';
import { RegColBasesUpsertWithWhereUniqueWithoutBaseInputObjectSchema } from './RegColBasesUpsertWithWhereUniqueWithoutBaseInput.schema';
import { RegColBasesCreateManyBaseInputEnvelopeObjectSchema } from './RegColBasesCreateManyBaseInputEnvelope.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesUpdateWithWhereUniqueWithoutBaseInputObjectSchema } from './RegColBasesUpdateWithWhereUniqueWithoutBaseInput.schema';
import { RegColBasesUpdateManyWithWhereWithoutBaseInputObjectSchema } from './RegColBasesUpdateManyWithWhereWithoutBaseInput.schema';
import { RegColBasesScalarWhereInputObjectSchema } from './RegColBasesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUncheckedUpdateManyWithoutBaseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColBasesCreateWithoutBaseInputObjectSchema),
          z.lazy(() => RegColBasesCreateWithoutBaseInputObjectSchema).array(),
          z.lazy(() => RegColBasesUncheckedCreateWithoutBaseInputObjectSchema),
          z
            .lazy(() => RegColBasesUncheckedCreateWithoutBaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RegColBasesCreateOrConnectWithoutBaseInputObjectSchema),
          z
            .lazy(() => RegColBasesCreateOrConnectWithoutBaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => RegColBasesUpsertWithWhereUniqueWithoutBaseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColBasesUpsertWithWhereUniqueWithoutBaseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegColBasesCreateManyBaseInputEnvelopeObjectSchema)
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
            () => RegColBasesUpdateWithWhereUniqueWithoutBaseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColBasesUpdateWithWhereUniqueWithoutBaseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RegColBasesUpdateManyWithWhereWithoutBaseInputObjectSchema,
          ),
          z
            .lazy(
              () => RegColBasesUpdateManyWithWhereWithoutBaseInputObjectSchema,
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

export const RegColBasesUncheckedUpdateManyWithoutBaseNestedInputObjectSchema =
  Schema;
