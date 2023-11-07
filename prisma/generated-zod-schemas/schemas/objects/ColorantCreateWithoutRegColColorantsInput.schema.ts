import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCreateWithoutRegColColorantsInput> = z
  .object({
    description: z.string(),
    shortcode: z.string(),
    basecodi: z.number(),
    gramUP: z.number(),
    gramUG: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ColorantCreateWithoutRegColColorantsInputObjectSchema = Schema;
