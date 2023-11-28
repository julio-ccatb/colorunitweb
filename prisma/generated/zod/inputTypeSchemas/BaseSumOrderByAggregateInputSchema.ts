import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BaseSumOrderByAggregateInputSchema: z.ZodType<Prisma.BaseSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tbaseId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BaseSumOrderByAggregateInputSchema;
