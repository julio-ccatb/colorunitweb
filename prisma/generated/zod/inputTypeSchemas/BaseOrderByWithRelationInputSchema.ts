import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TbaseOrderByWithRelationInputSchema } from './TbaseOrderByWithRelationInputSchema';
import { RegcolbasesOrderByRelationAggregateInputSchema } from './RegcolbasesOrderByRelationAggregateInputSchema';

export const BaseOrderByWithRelationInputSchema: z.ZodType<Prisma.BaseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reforiginal: z.lazy(() => SortOrderSchema).optional(),
  tbaseId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  slang: z.lazy(() => SortOrderSchema).optional(),
  tbase: z.lazy(() => TbaseOrderByWithRelationInputSchema).optional(),
  regcolbases: z.lazy(() => RegcolbasesOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BaseOrderByWithRelationInputSchema;
