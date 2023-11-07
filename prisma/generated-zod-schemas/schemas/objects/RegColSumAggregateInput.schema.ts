import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    carta: z.literal(true).optional(),
    R: z.literal(true).optional(),
    G: z.literal(true).optional(),
    B: z.literal(true).optional(),
    pesopromedio: z.literal(true).optional(),
    brillo: z.literal(true).optional(),
    coeficienteG: z.literal(true).optional(),
  })
  .strict();

export const RegColSumAggregateInputObjectSchema = Schema;
