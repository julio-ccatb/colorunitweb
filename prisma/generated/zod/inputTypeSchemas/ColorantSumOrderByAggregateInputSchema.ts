import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ColorantSumOrderByAggregateInputSchema: z.ZodType<Prisma.ColorantSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gramUP: z.lazy(() => SortOrderSchema).optional(),
  gramUG: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ColorantSumOrderByAggregateInputSchema;
