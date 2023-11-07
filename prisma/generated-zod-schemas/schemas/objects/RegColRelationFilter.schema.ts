import { z } from 'zod';
import { RegColWhereInputObjectSchema } from './RegColWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColRelationFilter> = z
  .object({
    is: z
      .lazy(() => RegColWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RegColWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const RegColRelationFilterObjectSchema = Schema;
