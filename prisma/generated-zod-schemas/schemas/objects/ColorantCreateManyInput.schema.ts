import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCreateManyInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    shortcode: z.string(),
    basecodi: z.number(),
    gramUP: z.number(),
    gramUG: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const ColorantCreateManyInputObjectSchema = Schema;
