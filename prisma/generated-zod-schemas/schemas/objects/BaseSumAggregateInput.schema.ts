import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tbaseId: z.literal(true).optional(),
  })
  .strict();

export const BaseSumAggregateInputObjectSchema = Schema;
