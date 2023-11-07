import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    regColId: z.literal(true).optional(),
    baseId: z.literal(true).optional(),
    amount: z.literal(true).optional(),
  })
  .strict();

export const RegColBasesMinAggregateInputObjectSchema = Schema;
