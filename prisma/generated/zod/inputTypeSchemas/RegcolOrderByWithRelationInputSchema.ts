import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TbaseOrderByWithRelationInputSchema } from './TbaseOrderByWithRelationInputSchema';
import { RegcolbasesOrderByRelationAggregateInputSchema } from './RegcolbasesOrderByRelationAggregateInputSchema';
import { RegcolcolorantsOrderByRelationAggregateInputSchema } from './RegcolcolorantsOrderByRelationAggregateInputSchema';

export const RegcolOrderByWithRelationInputSchema: z.ZodType<Prisma.RegcolOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  carta: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  R: z.lazy(() => SortOrderSchema).optional(),
  G: z.lazy(() => SortOrderSchema).optional(),
  B: z.lazy(() => SortOrderSchema).optional(),
  pesopromedio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  brillo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  active: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  coeficienteG: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tbaseId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  process: z.lazy(() => SortOrderSchema).optional(),
  tbase: z.lazy(() => TbaseOrderByWithRelationInputSchema).optional(),
  regcolbases: z.lazy(() => RegcolbasesOrderByRelationAggregateInputSchema).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RegcolOrderByWithRelationInputSchema;
