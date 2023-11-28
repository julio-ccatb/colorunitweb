import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegcolbasesSumOrderByAggregateInputSchema: z.ZodType<Prisma.RegcolbasesSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regColId: z.lazy(() => SortOrderSchema).optional(),
  baseId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegcolbasesSumOrderByAggregateInputSchema;
