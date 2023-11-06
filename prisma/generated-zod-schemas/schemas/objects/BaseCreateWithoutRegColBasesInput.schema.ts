import { z } from 'zod';
import { TBaseCreateNestedOneWithoutBasesInputObjectSchema } from './TBaseCreateNestedOneWithoutBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCreateWithoutRegColBasesInput> = z
  .object({
    reforiginal: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    slang: z.string().optional().nullable(),
    tbase: z.lazy(() => TBaseCreateNestedOneWithoutBasesInputObjectSchema),
  })
  .strict();

export const BaseCreateWithoutRegColBasesInputObjectSchema = Schema;
