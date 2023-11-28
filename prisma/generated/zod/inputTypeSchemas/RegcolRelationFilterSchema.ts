import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';

export const RegcolRelationFilterSchema: z.ZodType<Prisma.RegcolRelationFilter> = z.object({
  is: z.lazy(() => RegcolWhereInputSchema).optional(),
  isNot: z.lazy(() => RegcolWhereInputSchema).optional()
}).strict();

export default RegcolRelationFilterSchema;
