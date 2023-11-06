import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCreateManyTbaseInput> = z
  .object({
    id: z.number().optional(),
    reforiginal: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    slang: z.string().optional().nullable(),
  })
  .strict();

export const BaseCreateManyTbaseInputObjectSchema = Schema;
