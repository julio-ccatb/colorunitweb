import { z } from 'zod';
import { RegColBasesWhereInputObjectSchema } from './RegColBasesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesListRelationFilter> = z
  .object({
    every: z.lazy(() => RegColBasesWhereInputObjectSchema).optional(),
    some: z.lazy(() => RegColBasesWhereInputObjectSchema).optional(),
    none: z.lazy(() => RegColBasesWhereInputObjectSchema).optional(),
  })
  .strict();

export const RegColBasesListRelationFilterObjectSchema = Schema;
