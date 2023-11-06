import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateManyBaseInput> = z
  .object({
    id: z.number().optional(),
    regColId: z.number(),
    amount: z.number(),
  })
  .strict();

export const RegColBasesCreateManyBaseInputObjectSchema = Schema;
