import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    shortcode: z.literal(true).optional(),
    basecodi: z.literal(true).optional(),
    gramUP: z.literal(true).optional(),
    gramUG: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ColorantCountAggregateInputObjectSchema = Schema;
