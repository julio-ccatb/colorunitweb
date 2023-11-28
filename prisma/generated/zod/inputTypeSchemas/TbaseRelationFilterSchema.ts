import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';

export const TbaseRelationFilterSchema: z.ZodType<Prisma.TbaseRelationFilter> = z.object({
  is: z.lazy(() => TbaseWhereInputSchema).optional(),
  isNot: z.lazy(() => TbaseWhereInputSchema).optional()
}).strict();

export default TbaseRelationFilterSchema;
