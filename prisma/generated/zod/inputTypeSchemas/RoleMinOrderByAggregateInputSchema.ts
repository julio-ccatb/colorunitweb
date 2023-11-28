import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleMinOrderByAggregateInputSchema;
