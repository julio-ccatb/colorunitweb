import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TbaseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TbaseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  shortcode: z.lazy(() => SortOrderSchema).optional(),
  peso1: z.lazy(() => SortOrderSchema).optional(),
  peso2: z.lazy(() => SortOrderSchema).optional(),
  peso3: z.lazy(() => SortOrderSchema).optional(),
  peso4: z.lazy(() => SortOrderSchema).optional(),
  peso5: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TbaseMaxOrderByAggregateInputSchema;
