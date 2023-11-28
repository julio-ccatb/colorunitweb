import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ColorantAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ColorantAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gramUP: z.lazy(() => SortOrderSchema).optional(),
  gramUG: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ColorantAvgOrderByAggregateInputSchema;
