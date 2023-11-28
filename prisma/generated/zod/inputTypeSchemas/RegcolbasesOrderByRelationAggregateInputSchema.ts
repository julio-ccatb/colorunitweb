import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegcolbasesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RegcolbasesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegcolbasesOrderByRelationAggregateInputSchema;
