import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BaseOrderByWithRelationInputSchema } from './BaseOrderByWithRelationInputSchema';
import { RegcolOrderByWithRelationInputSchema } from './RegcolOrderByWithRelationInputSchema';

export const RegcolbasesOrderByWithRelationInputSchema: z.ZodType<Prisma.RegcolbasesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regColId: z.lazy(() => SortOrderSchema).optional(),
  baseId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  base: z.lazy(() => BaseOrderByWithRelationInputSchema).optional(),
  regcol: z.lazy(() => RegcolOrderByWithRelationInputSchema).optional()
}).strict();

export default RegcolbasesOrderByWithRelationInputSchema;
