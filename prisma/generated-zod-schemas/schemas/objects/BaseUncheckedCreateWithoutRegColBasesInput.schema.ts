import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUncheckedCreateWithoutRegColBasesInput> = z
  .object({
    id: z.number().optional(),
    reforiginal: z.string().optional().nullable(),
    tbaseId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    slang: z.string().optional().nullable(),
  })
  .strict();

export const BaseUncheckedCreateWithoutRegColBasesInputObjectSchema = Schema;
