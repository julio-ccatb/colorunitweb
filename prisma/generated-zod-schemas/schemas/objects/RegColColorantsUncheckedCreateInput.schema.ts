import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    regColId: z.number(),
    colorantId: z.number(),
    amount: z.number(),
  })
  .strict();

export const RegColColorantsUncheckedCreateInputObjectSchema = Schema;
