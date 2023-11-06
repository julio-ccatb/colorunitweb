import { z } from 'zod';
import { BaseWhereInputObjectSchema } from './BaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseRelationFilter> = z
  .object({
    is: z
      .lazy(() => BaseWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BaseWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BaseRelationFilterObjectSchema = Schema;
