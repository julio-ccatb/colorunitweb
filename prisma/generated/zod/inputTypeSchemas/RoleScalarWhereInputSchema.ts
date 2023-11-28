import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const RoleScalarWhereInputSchema: z.ZodType<Prisma.RoleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default RoleScalarWhereInputSchema;
