import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegcolcolorantsCountOrderByAggregateInputSchema: z.ZodType<Prisma.RegcolcolorantsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regColId: z.lazy(() => SortOrderSchema).optional(),
  colorantId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegcolcolorantsCountOrderByAggregateInputSchema;
