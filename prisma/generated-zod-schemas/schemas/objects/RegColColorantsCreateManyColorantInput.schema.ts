import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateManyColorantInput> = z
  .object({
    id: z.number().optional(),
    regColId: z.number(),
    amount: z.number(),
  })
  .strict();

export const RegColColorantsCreateManyColorantInputObjectSchema = Schema;
