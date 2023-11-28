import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TbaseCountOrderByAggregateInputSchema } from './TbaseCountOrderByAggregateInputSchema';
import { TbaseAvgOrderByAggregateInputSchema } from './TbaseAvgOrderByAggregateInputSchema';
import { TbaseMaxOrderByAggregateInputSchema } from './TbaseMaxOrderByAggregateInputSchema';
import { TbaseMinOrderByAggregateInputSchema } from './TbaseMinOrderByAggregateInputSchema';
import { TbaseSumOrderByAggregateInputSchema } from './TbaseSumOrderByAggregateInputSchema';

export const TbaseOrderByWithAggregationInputSchema: z.ZodType<Prisma.TbaseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  shortcode: z.lazy(() => SortOrderSchema).optional(),
  peso1: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso3: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso4: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso5: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TbaseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TbaseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TbaseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TbaseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TbaseSumOrderByAggregateInputSchema).optional()
}).strict();

export default TbaseOrderByWithAggregationInputSchema;
