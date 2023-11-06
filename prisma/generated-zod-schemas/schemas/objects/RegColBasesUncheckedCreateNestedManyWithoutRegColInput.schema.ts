import { z } from 'zod';
import { RegColBasesCreateWithoutRegColInputObjectSchema } from './RegColBasesCreateWithoutRegColInput.schema';
import { RegColBasesUncheckedCreateWithoutRegColInputObjectSchema } from './RegColBasesUncheckedCreateWithoutRegColInput.schema';
import { RegColBasesCreateOrConnectWithoutRegColInputObjectSchema } from './RegColBasesCreateOrConnectWithoutRegColInput.schema';
import { RegColBasesCreateManyRegColInputEnvelopeObjectSchema } from './RegColBasesCreateManyRegColInputEnvelope.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUncheckedCreateNestedManyWithoutRegColInput> =
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
      createMany: z
        .lazy(() => RegColBasesCreateManyRegColInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
          z.lazy(() => RegColBasesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegColBasesUncheckedCreateNestedManyWithoutRegColInputObjectSchema =
  Schema;
