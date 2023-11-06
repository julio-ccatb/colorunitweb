import { z } from 'zod';
import { RegColColorantsWhereInputObjectSchema } from './RegColColorantsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsListRelationFilter> = z
  .object({
    every: z.lazy(() => RegColColorantsWhereInputObjectSchema).optional(),
    some: z.lazy(() => RegColColorantsWhereInputObjectSchema).optional(),
    none: z.lazy(() => RegColColorantsWhereInputObjectSchema).optional(),
  })
  .strict();

export const RegColColorantsListRelationFilterObjectSchema = Schema;
