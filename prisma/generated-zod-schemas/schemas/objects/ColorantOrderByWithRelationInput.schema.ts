import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegColColorantsOrderByRelationAggregateInputObjectSchema } from './RegColColorantsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    shortcode: z.lazy(() => SortOrderSchema).optional(),
    basecodi: z.lazy(() => SortOrderSchema).optional(),
    gramUP: z.lazy(() => SortOrderSchema).optional(),
    gramUG: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    regColColorants: z
      .lazy(() => RegColColorantsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ColorantOrderByWithRelationInputObjectSchema = Schema;
