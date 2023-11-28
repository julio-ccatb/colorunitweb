import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';

export const TbaseNullableRelationFilterSchema: z.ZodType<Prisma.TbaseNullableRelationFilter> = z.object({
  is: z.lazy(() => TbaseWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TbaseWhereInputSchema).optional().nullable()
}).strict();

export default TbaseNullableRelationFilterSchema;
