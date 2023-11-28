import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRolesInputSchema } from './UserCreateNestedOneWithoutRolesInputSchema';

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.object({
  roleId: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutRolesInputSchema)
}).strict();

export default RoleCreateInputSchema;
