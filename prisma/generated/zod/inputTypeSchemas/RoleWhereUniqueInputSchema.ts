import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleRoleIdUserIdCompoundUniqueInputSchema } from './RoleRoleIdUserIdCompoundUniqueInputSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z.object({
  roleId_userId: z.lazy(() => RoleRoleIdUserIdCompoundUniqueInputSchema)
})
.and(z.object({
  roleId_userId: z.lazy(() => RoleRoleIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema),z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default RoleWhereUniqueInputSchema;
