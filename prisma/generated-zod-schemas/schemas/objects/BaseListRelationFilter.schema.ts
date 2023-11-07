import { z } from 'zod';
import { BaseWhereInputObjectSchema } from './BaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseListRelationFilter> = z
  .object({
    every: z.lazy(() => BaseWhereInputObjectSchema).optional(),
    some: z.lazy(() => BaseWhereInputObjectSchema).optional(),
    none: z.lazy(() => BaseWhereInputObjectSchema).optional(),
  })
  .strict();

export const BaseListRelationFilterObjectSchema = Schema;
