import { z } from 'zod';
import { ColorantWhereInputObjectSchema } from './ColorantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantRelationFilter> = z
  .object({
    is: z
      .lazy(() => ColorantWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ColorantWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ColorantRelationFilterObjectSchema = Schema;
