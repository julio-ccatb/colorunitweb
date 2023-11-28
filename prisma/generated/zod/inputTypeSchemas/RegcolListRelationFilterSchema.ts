import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';

export const RegcolListRelationFilterSchema: z.ZodType<Prisma.RegcolListRelationFilter> = z.object({
  every: z.lazy(() => RegcolWhereInputSchema).optional(),
  some: z.lazy(() => RegcolWhereInputSchema).optional(),
  none: z.lazy(() => RegcolWhereInputSchema).optional()
}).strict();

export default RegcolListRelationFilterSchema;
