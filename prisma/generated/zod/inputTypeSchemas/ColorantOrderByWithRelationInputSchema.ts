import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RegcolcolorantsOrderByRelationAggregateInputSchema } from './RegcolcolorantsOrderByRelationAggregateInputSchema';

export const ColorantOrderByWithRelationInputSchema: z.ZodType<Prisma.ColorantOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  shortcode: z.lazy(() => SortOrderSchema).optional(),
  gramUP: z.lazy(() => SortOrderSchema).optional(),
  gramUG: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default ColorantOrderByWithRelationInputSchema;
