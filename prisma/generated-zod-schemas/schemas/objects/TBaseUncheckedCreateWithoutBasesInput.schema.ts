import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseUncheckedCreateWithoutBasesInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    shortcode: z.string(),
    peso1: z.number().optional().nullable(),
    peso2: z.number().optional().nullable(),
    peso3: z.number().optional().nullable(),
    peso4: z.number().optional().nullable(),
    peso5: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const TBaseUncheckedCreateWithoutBasesInputObjectSchema = Schema;
