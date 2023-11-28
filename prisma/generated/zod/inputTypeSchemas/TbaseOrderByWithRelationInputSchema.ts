import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BaseOrderByRelationAggregateInputSchema } from './BaseOrderByRelationAggregateInputSchema';
import { RegcolOrderByRelationAggregateInputSchema } from './RegcolOrderByRelationAggregateInputSchema';

export const TbaseOrderByWithRelationInputSchema: z.ZodType<Prisma.TbaseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  shortcode: z.lazy(() => SortOrderSchema).optional(),
  peso1: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso3: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso4: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  peso5: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  base: z.lazy(() => BaseOrderByRelationAggregateInputSchema).optional(),
  regCol: z.lazy(() => RegcolOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TbaseOrderByWithRelationInputSchema;
