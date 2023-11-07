import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateManyRegColInput> = z
  .object({
    id: z.number().optional(),
    colorantId: z.number(),
    amount: z.number(),
  })
  .strict();

export const RegColColorantsCreateManyRegColInputObjectSchema = Schema;
