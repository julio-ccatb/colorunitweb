import { z } from 'zod';
import { TBaseUpdateWithoutBasesInputObjectSchema } from './TBaseUpdateWithoutBasesInput.schema';
import { TBaseUncheckedUpdateWithoutBasesInputObjectSchema } from './TBaseUncheckedUpdateWithoutBasesInput.schema';
import { TBaseCreateWithoutBasesInputObjectSchema } from './TBaseCreateWithoutBasesInput.schema';
import { TBaseUncheckedCreateWithoutBasesInputObjectSchema } from './TBaseUncheckedCreateWithoutBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseUpsertWithoutBasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => TBaseUpdateWithoutBasesInputObjectSchema),
      z.lazy(() => TBaseUncheckedUpdateWithoutBasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TBaseCreateWithoutBasesInputObjectSchema),
      z.lazy(() => TBaseUncheckedCreateWithoutBasesInputObjectSchema),
    ]),
  })
  .strict();

export const TBaseUpsertWithoutBasesInputObjectSchema = Schema;
