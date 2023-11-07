import { z } from 'zod';
import { TBaseWhereInputObjectSchema } from './TBaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseRelationFilter> = z
  .object({
    is: z
      .lazy(() => TBaseWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TBaseWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TBaseRelationFilterObjectSchema = Schema;
