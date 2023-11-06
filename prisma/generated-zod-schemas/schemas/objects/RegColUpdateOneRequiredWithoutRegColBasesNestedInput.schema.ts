import { z } from 'zod';
import { RegColCreateWithoutRegColBasesInputObjectSchema } from './RegColCreateWithoutRegColBasesInput.schema';
import { RegColUncheckedCreateWithoutRegColBasesInputObjectSchema } from './RegColUncheckedCreateWithoutRegColBasesInput.schema';
import { RegColCreateOrConnectWithoutRegColBasesInputObjectSchema } from './RegColCreateOrConnectWithoutRegColBasesInput.schema';
import { RegColUpsertWithoutRegColBasesInputObjectSchema } from './RegColUpsertWithoutRegColBasesInput.schema';
import { RegColWhereUniqueInputObjectSchema } from './RegColWhereUniqueInput.schema';
import { RegColUpdateWithoutRegColBasesInputObjectSchema } from './RegColUpdateWithoutRegColBasesInput.schema';
import { RegColUncheckedUpdateWithoutRegColBasesInputObjectSchema } from './RegColUncheckedUpdateWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColUpdateOneRequiredWithoutRegColBasesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColCreateWithoutRegColBasesInputObjectSchema),
          z.lazy(
            () => RegColUncheckedCreateWithoutRegColBasesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RegColCreateOrConnectWithoutRegColBasesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RegColUpsertWithoutRegColBasesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RegColWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RegColUpdateWithoutRegColBasesInputObjectSchema),
          z.lazy(
            () => RegColUncheckedUpdateWithoutRegColBasesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const RegColUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema =
  Schema;
