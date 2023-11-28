import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereInputSchema } from './BaseWhereInputSchema';

export const BaseRelationFilterSchema: z.ZodType<Prisma.BaseRelationFilter> = z.object({
  is: z.lazy(() => BaseWhereInputSchema).optional(),
  isNot: z.lazy(() => BaseWhereInputSchema).optional()
}).strict();

export default BaseRelationFilterSchema;
