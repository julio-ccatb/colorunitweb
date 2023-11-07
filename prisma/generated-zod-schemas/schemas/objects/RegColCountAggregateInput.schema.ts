import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    carta: z.literal(true).optional(),
    R: z.literal(true).optional(),
    G: z.literal(true).optional(),
    B: z.literal(true).optional(),
    pesopromedio: z.literal(true).optional(),
    brillo: z.literal(true).optional(),
    active: z.literal(true).optional(),
    coeficienteG: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const RegColCountAggregateInputObjectSchema = Schema;
