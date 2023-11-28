import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegcolMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RegcolMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  carta: z.lazy(() => SortOrderSchema).optional(),
  R: z.lazy(() => SortOrderSchema).optional(),
  G: z.lazy(() => SortOrderSchema).optional(),
  B: z.lazy(() => SortOrderSchema).optional(),
  tbaseId: z.lazy(() => SortOrderSchema).optional(),
  process: z.lazy(() => SortOrderSchema).optional(),
  pesopromedio: z.lazy(() => SortOrderSchema).optional(),
  brillo: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  coeficienteG: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegcolMaxOrderByAggregateInputSchema;
