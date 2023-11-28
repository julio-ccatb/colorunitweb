import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RegcolcolorantsCountOrderByAggregateInputSchema } from './RegcolcolorantsCountOrderByAggregateInputSchema';
import { RegcolcolorantsAvgOrderByAggregateInputSchema } from './RegcolcolorantsAvgOrderByAggregateInputSchema';
import { RegcolcolorantsMaxOrderByAggregateInputSchema } from './RegcolcolorantsMaxOrderByAggregateInputSchema';
import { RegcolcolorantsMinOrderByAggregateInputSchema } from './RegcolcolorantsMinOrderByAggregateInputSchema';
import { RegcolcolorantsSumOrderByAggregateInputSchema } from './RegcolcolorantsSumOrderByAggregateInputSchema';

export const RegcolcolorantsOrderByWithAggregationInputSchema: z.ZodType<Prisma.RegcolcolorantsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regColId: z.lazy(() => SortOrderSchema).optional(),
  colorantId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RegcolcolorantsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RegcolcolorantsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RegcolcolorantsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RegcolcolorantsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RegcolcolorantsSumOrderByAggregateInputSchema).optional()
}).strict();

export default RegcolcolorantsOrderByWithAggregationInputSchema;
