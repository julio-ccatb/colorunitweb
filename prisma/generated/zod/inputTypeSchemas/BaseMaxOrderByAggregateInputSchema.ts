import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BaseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BaseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reforiginal: z.lazy(() => SortOrderSchema).optional(),
  tbaseId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slang: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BaseMaxOrderByAggregateInputSchema;
