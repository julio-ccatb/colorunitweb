import { z } from 'zod';
import { RegColBasesUncheckedCreateNestedManyWithoutBaseInputObjectSchema } from './RegColBasesUncheckedCreateNestedManyWithoutBaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    reforiginal: z.string().optional().nullable(),
    tbaseId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    slang: z.string().optional().nullable(),
    regColBases: z
      .lazy(
        () => RegColBasesUncheckedCreateNestedManyWithoutBaseInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BaseUncheckedCreateInputObjectSchema = Schema;
