import { z } from 'zod';
import { RegColColorantsCreateNestedManyWithoutColorantInputObjectSchema } from './RegColColorantsCreateNestedManyWithoutColorantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCreateInput> = z
  .object({
    description: z.string(),
    shortcode: z.string(),
    basecodi: z.number(),
    gramUP: z.number(),
    gramUG: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    regColColorants: z
      .lazy(
        () => RegColColorantsCreateNestedManyWithoutColorantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ColorantCreateInputObjectSchema = Schema;
