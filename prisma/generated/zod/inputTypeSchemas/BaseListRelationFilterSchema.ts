import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereInputSchema } from './BaseWhereInputSchema';

export const BaseListRelationFilterSchema: z.ZodType<Prisma.BaseListRelationFilter> = z.object({
  every: z.lazy(() => BaseWhereInputSchema).optional(),
  some: z.lazy(() => BaseWhereInputSchema).optional(),
  none: z.lazy(() => BaseWhereInputSchema).optional()
}).strict();

export default BaseListRelationFilterSchema;
