import { z } from 'zod';
import { RegColBasesCreateWithoutBaseInputObjectSchema } from './RegColBasesCreateWithoutBaseInput.schema';
import { RegColBasesUncheckedCreateWithoutBaseInputObjectSchema } from './RegColBasesUncheckedCreateWithoutBaseInput.schema';
import { RegColBasesCreateOrConnectWithoutBaseInputObjectSchema } from './RegColBasesCreateOrConnectWithoutBaseInput.schema';
import { RegColBasesCreateManyBaseInputEnvelopeObjectSchema } from './RegColBasesCreateManyBaseInputEnvelope.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUncheckedCreateNestedManyWithoutBaseInput> =
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
      createMany: z
        .lazy(() => RegColBasesCreateManyBaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegColBasesUncheckedCreateNestedManyWithoutBaseInputObjectSchema =
  Schema;
