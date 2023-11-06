import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    reforiginal: z.literal(true).optional(),
    tbaseId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    slang: z.literal(true).optional(),
  })
  .strict();

export const BaseMinAggregateInputObjectSchema = Schema;
