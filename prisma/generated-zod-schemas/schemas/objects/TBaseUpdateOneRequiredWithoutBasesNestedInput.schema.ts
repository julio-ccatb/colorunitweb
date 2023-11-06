import { z } from 'zod';
import { TBaseCreateWithoutBasesInputObjectSchema } from './TBaseCreateWithoutBasesInput.schema';
import { TBaseUncheckedCreateWithoutBasesInputObjectSchema } from './TBaseUncheckedCreateWithoutBasesInput.schema';
import { TBaseCreateOrConnectWithoutBasesInputObjectSchema } from './TBaseCreateOrConnectWithoutBasesInput.schema';
import { TBaseUpsertWithoutBasesInputObjectSchema } from './TBaseUpsertWithoutBasesInput.schema';
import { TBaseWhereUniqueInputObjectSchema } from './TBaseWhereUniqueInput.schema';
import { TBaseUpdateWithoutBasesInputObjectSchema } from './TBaseUpdateWithoutBasesInput.schema';
import { TBaseUncheckedUpdateWithoutBasesInputObjectSchema } from './TBaseUncheckedUpdateWithoutBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseUpdateOneRequiredWithoutBasesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TBaseCreateWithoutBasesInputObjectSchema),
          z.lazy(() => TBaseUncheckedCreateWithoutBasesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TBaseCreateOrConnectWithoutBasesInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => TBaseUpsertWithoutBasesInputObjectSchema).optional(),
      connect: z.lazy(() => TBaseWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TBaseUpdateWithoutBasesInputObjectSchema),
          z.lazy(() => TBaseUncheckedUpdateWithoutBasesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TBaseUpdateOneRequiredWithoutBasesNestedInputObjectSchema = Schema;
