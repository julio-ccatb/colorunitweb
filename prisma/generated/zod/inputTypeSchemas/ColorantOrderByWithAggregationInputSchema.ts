import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ColorantCountOrderByAggregateInputSchema } from './ColorantCountOrderByAggregateInputSchema';
import { ColorantAvgOrderByAggregateInputSchema } from './ColorantAvgOrderByAggregateInputSchema';
import { ColorantMaxOrderByAggregateInputSchema } from './ColorantMaxOrderByAggregateInputSchema';
import { ColorantMinOrderByAggregateInputSchema } from './ColorantMinOrderByAggregateInputSchema';
import { ColorantSumOrderByAggregateInputSchema } from './ColorantSumOrderByAggregateInputSchema';

export const ColorantOrderByWithAggregationInputSchema: z.ZodType<Prisma.ColorantOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  shortcode: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  gramUP: z.lazy(() => SortOrderSchema).optional(),
  gramUG: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ColorantCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ColorantAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ColorantMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ColorantMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ColorantSumOrderByAggregateInputSchema).optional()
}).strict();

export default ColorantOrderByWithAggregationInputSchema;
