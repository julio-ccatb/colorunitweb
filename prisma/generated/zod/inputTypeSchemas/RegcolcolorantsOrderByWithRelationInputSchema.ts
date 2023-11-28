import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ColorantOrderByWithRelationInputSchema } from './ColorantOrderByWithRelationInputSchema';
import { RegcolOrderByWithRelationInputSchema } from './RegcolOrderByWithRelationInputSchema';

export const RegcolcolorantsOrderByWithRelationInputSchema: z.ZodType<Prisma.RegcolcolorantsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  regColId: z.lazy(() => SortOrderSchema).optional(),
  colorantId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  colorant: z.lazy(() => ColorantOrderByWithRelationInputSchema).optional(),
  regcol: z.lazy(() => RegcolOrderByWithRelationInputSchema).optional()
}).strict();

export default RegcolcolorantsOrderByWithRelationInputSchema;
