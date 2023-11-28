import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RegcolbasesCountOrderByAggregateInputSchema } from './RegcolbasesCountOrderByAggregateInputSchema';
import { RegcolbasesAvgOrderByAggregateInputSchema } from './RegcolbasesAvgOrderByAggregateInputSchema';
import { RegcolbasesMaxOrderByAggregateInputSchema } from './RegcolbasesMaxOrderByAggregateInputSchema';
import { RegcolbasesMinOrderByAggregateInputSchema } from './RegcolbasesMinOrderByAggregateInputSchema';
import { RegcolbasesSumOrderByAggregateInputSchema } from './RegcolbasesSumOrderByAggregateInputSchema';

export const RegcolbasesOrderByWithAggregationInputSchema: z.ZodType<Prisma.RegcolbasesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regColId: z.lazy(() => SortOrderSchema).optional(),
  baseId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RegcolbasesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RegcolbasesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RegcolbasesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RegcolbasesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RegcolbasesSumOrderByAggregateInputSchema).optional()
}).strict();

export default RegcolbasesOrderByWithAggregationInputSchema;
