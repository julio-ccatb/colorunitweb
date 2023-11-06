import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUncheckedCreateWithoutRegColInput> = z
  .object({
    id: z.number().optional(),
    baseId: z.number(),
    amount: z.number(),
  })
  .strict();

export const RegColBasesUncheckedCreateWithoutRegColInputObjectSchema = Schema;
