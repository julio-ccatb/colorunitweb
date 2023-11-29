import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ColorantCountOrderByAggregateInputSchema: z.ZodType<Prisma.ColorantCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  shortcode: z.lazy(() => SortOrderSchema).optional(),
  gramUP: z.lazy(() => SortOrderSchema).optional(),
  gramUG: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ColorantCountOrderByAggregateInputSchema;
