import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    basecodi: z.literal(true).optional(),
    gramUP: z.literal(true).optional(),
    gramUG: z.literal(true).optional(),
  })
  .strict();

export const ColorantAvgAggregateInputObjectSchema = Schema;
