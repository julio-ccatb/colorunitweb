import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUncheckedCreateWithoutRegColInput> =
  z
    .object({
      id: z.number().optional(),
      colorantId: z.number(),
      amount: z.number(),
    })
    .strict();

export const RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema =
  Schema;
