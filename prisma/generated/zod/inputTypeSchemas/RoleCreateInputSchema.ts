import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRoleInputSchema } from './UserCreateNestedOneWithoutRoleInputSchema';

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  roleId: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutRoleInputSchema)
}).strict();

export default RoleCreateInputSchema;
