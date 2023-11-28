import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RegcolCountOrderByAggregateInputSchema } from './RegcolCountOrderByAggregateInputSchema';
import { RegcolAvgOrderByAggregateInputSchema } from './RegcolAvgOrderByAggregateInputSchema';
import { RegcolMaxOrderByAggregateInputSchema } from './RegcolMaxOrderByAggregateInputSchema';
import { RegcolMinOrderByAggregateInputSchema } from './RegcolMinOrderByAggregateInputSchema';
import { RegcolSumOrderByAggregateInputSchema } from './RegcolSumOrderByAggregateInputSchema';

export const RegcolOrderByWithAggregationInputSchema: z.ZodType<Prisma.RegcolOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  carta: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  R: z.lazy(() => SortOrderSchema).optional(),
  G: z.lazy(() => SortOrderSchema).optional(),
  B: z.lazy(() => SortOrderSchema).optional(),
  tbaseId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  process: z.lazy(() => SortOrderSchema).optional(),
  pesopromedio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  brillo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  active: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  coeficienteG: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RegcolCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RegcolAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RegcolMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RegcolMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RegcolSumOrderByAggregateInputSchema).optional()
}).strict();

export default RegcolOrderByWithAggregationInputSchema;
