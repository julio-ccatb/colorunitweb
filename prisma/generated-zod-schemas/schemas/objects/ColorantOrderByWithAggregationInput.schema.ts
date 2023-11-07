import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ColorantCountOrderByAggregateInputObjectSchema } from './ColorantCountOrderByAggregateInput.schema';
import { ColorantAvgOrderByAggregateInputObjectSchema } from './ColorantAvgOrderByAggregateInput.schema';
import { ColorantMaxOrderByAggregateInputObjectSchema } from './ColorantMaxOrderByAggregateInput.schema';
import { ColorantMinOrderByAggregateInputObjectSchema } from './ColorantMinOrderByAggregateInput.schema';
import { ColorantSumOrderByAggregateInputObjectSchema } from './ColorantSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    shortcode: z.lazy(() => SortOrderSchema).optional(),
    basecodi: z.lazy(() => SortOrderSchema).optional(),
    gramUP: z.lazy(() => SortOrderSchema).optional(),
    gramUG: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ColorantCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ColorantAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ColorantMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ColorantMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ColorantSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ColorantOrderByWithAggregationInputObjectSchema = Schema;
