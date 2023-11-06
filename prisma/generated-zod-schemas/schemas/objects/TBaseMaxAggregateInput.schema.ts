import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    shortcode: z.literal(true).optional(),
    peso1: z.literal(true).optional(),
    peso2: z.literal(true).optional(),
    peso3: z.literal(true).optional(),
    peso4: z.literal(true).optional(),
    peso5: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const TBaseMaxAggregateInputObjectSchema = Schema;
