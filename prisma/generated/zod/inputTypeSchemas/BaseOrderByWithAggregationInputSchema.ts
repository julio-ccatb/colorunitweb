import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BaseCountOrderByAggregateInputSchema } from './BaseCountOrderByAggregateInputSchema';
import { BaseAvgOrderByAggregateInputSchema } from './BaseAvgOrderByAggregateInputSchema';
import { BaseMaxOrderByAggregateInputSchema } from './BaseMaxOrderByAggregateInputSchema';
import { BaseMinOrderByAggregateInputSchema } from './BaseMinOrderByAggregateInputSchema';
import { BaseSumOrderByAggregateInputSchema } from './BaseSumOrderByAggregateInputSchema';

export const BaseOrderByWithAggregationInputSchema: z.ZodType<Prisma.BaseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reforiginal: z.lazy(() => SortOrderSchema).optional(),
  tbaseId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slang: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BaseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BaseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BaseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BaseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BaseSumOrderByAggregateInputSchema).optional()
}).strict();

export default BaseOrderByWithAggregationInputSchema;
