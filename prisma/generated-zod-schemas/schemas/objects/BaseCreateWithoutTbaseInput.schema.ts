import { z } from 'zod';
import { RegColBasesCreateNestedManyWithoutBaseInputObjectSchema } from './RegColBasesCreateNestedManyWithoutBaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCreateWithoutTbaseInput> = z
  .object({
    reforiginal: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    slang: z.string().optional().nullable(),
    regColBases: z
      .lazy(() => RegColBasesCreateNestedManyWithoutBaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const BaseCreateWithoutTbaseInputObjectSchema = Schema;
