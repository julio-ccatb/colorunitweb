import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutRolesInputSchema } from './UserUpdateWithoutRolesInputSchema';
import { UserUncheckedUpdateWithoutRolesInputSchema } from './UserUncheckedUpdateWithoutRolesInputSchema';

export const UserUpdateToOneWithWhereWithoutRolesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRolesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutRolesInputSchema;
