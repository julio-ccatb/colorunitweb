import { z } from 'zod';
import { BaseCreateWithoutRegColBasesInputObjectSchema } from './BaseCreateWithoutRegColBasesInput.schema';
import { BaseUncheckedCreateWithoutRegColBasesInputObjectSchema } from './BaseUncheckedCreateWithoutRegColBasesInput.schema';
import { BaseCreateOrConnectWithoutRegColBasesInputObjectSchema } from './BaseCreateOrConnectWithoutRegColBasesInput.schema';
import { BaseUpsertWithoutRegColBasesInputObjectSchema } from './BaseUpsertWithoutRegColBasesInput.schema';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';
import { BaseUpdateWithoutRegColBasesInputObjectSchema } from './BaseUpdateWithoutRegColBasesInput.schema';
import { BaseUncheckedUpdateWithoutRegColBasesInputObjectSchema } from './BaseUncheckedUpdateWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUpdateOneRequiredWithoutRegColBasesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BaseCreateWithoutRegColBasesInputObjectSchema),
          z.lazy(() => BaseUncheckedCreateWithoutRegColBasesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BaseCreateOrConnectWithoutRegColBasesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => BaseUpsertWithoutRegColBasesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BaseWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BaseUpdateWithoutRegColBasesInputObjectSchema),
          z.lazy(() => BaseUncheckedUpdateWithoutRegColBasesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BaseUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema =
  Schema;
