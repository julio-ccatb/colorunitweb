import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsWhereInputSchema } from './RegcolcolorantsWhereInputSchema';

export const RegcolcolorantsListRelationFilterSchema: z.ZodType<Prisma.RegcolcolorantsListRelationFilter> = z.object({
  every: z.lazy(() => RegcolcolorantsWhereInputSchema).optional(),
  some: z.lazy(() => RegcolcolorantsWhereInputSchema).optional(),
  none: z.lazy(() => RegcolcolorantsWhereInputSchema).optional()
}).strict();

export default RegcolcolorantsListRelationFilterSchema;
