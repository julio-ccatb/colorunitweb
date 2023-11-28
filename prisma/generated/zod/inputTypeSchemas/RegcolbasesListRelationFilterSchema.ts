import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesWhereInputSchema } from './RegcolbasesWhereInputSchema';

export const RegcolbasesListRelationFilterSchema: z.ZodType<Prisma.RegcolbasesListRelationFilter> = z.object({
  every: z.lazy(() => RegcolbasesWhereInputSchema).optional(),
  some: z.lazy(() => RegcolbasesWhereInputSchema).optional(),
  none: z.lazy(() => RegcolbasesWhereInputSchema).optional()
}).strict();

export default RegcolbasesListRelationFilterSchema;
