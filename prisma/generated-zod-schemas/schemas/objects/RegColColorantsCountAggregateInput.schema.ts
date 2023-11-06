import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    regColId: z.literal(true).optional(),
    colorantId: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const RegColColorantsCountAggregateInputObjectSchema = Schema;
