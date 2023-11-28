import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegcolcolorantsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RegcolcolorantsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegcolcolorantsOrderByRelationAggregateInputSchema;
