import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateManyInput> = z
  .object({
    id: z.number().optional(),
    regColId: z.number(),
    baseId: z.number(),
    amount: z.number(),
  })
  .strict();

export const RegColBasesCreateManyInputObjectSchema = Schema;
