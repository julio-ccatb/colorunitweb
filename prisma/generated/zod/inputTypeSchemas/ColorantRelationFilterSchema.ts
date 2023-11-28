import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColorantWhereInputSchema } from './ColorantWhereInputSchema';

export const ColorantRelationFilterSchema: z.ZodType<Prisma.ColorantRelationFilter> = z.object({
  is: z.lazy(() => ColorantWhereInputSchema).optional(),
  isNot: z.lazy(() => ColorantWhereInputSchema).optional()
}).strict();

export default ColorantRelationFilterSchema;
