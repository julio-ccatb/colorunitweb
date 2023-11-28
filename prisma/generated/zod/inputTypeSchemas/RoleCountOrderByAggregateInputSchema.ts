import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleCountOrderByAggregateInputSchema;
