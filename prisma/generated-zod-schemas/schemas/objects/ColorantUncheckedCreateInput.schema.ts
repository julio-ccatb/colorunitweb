import { z } from 'zod';
import { RegColColorantsUncheckedCreateNestedManyWithoutColorantInputObjectSchema } from './RegColColorantsUncheckedCreateNestedManyWithoutColorantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    shortcode: z.string(),
    basecodi: z.number(),
    gramUP: z.number(),
    gramUG: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    regColColorants: z
      .lazy(
        () =>
          RegColColorantsUncheckedCreateNestedManyWithoutColorantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ColorantUncheckedCreateInputObjectSchema = Schema;
