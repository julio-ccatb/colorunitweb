import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleRoleIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.RoleRoleIdUserIdCompoundUniqueInput> = z.object({
  roleId: z.string(),
  userId: z.string()
}).strict();

export default RoleRoleIdUserIdCompoundUniqueInputSchema;
