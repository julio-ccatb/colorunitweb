import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutRolesInputSchema } from './UserUpdateWithoutRolesInputSchema';
import { UserUncheckedUpdateWithoutRolesInputSchema } from './UserUncheckedUpdateWithoutRolesInputSchema';
import { UserCreateWithoutRolesInputSchema } from './UserCreateWithoutRolesInputSchema';
import { UserUncheckedCreateWithoutRolesInputSchema } from './UserUncheckedCreateWithoutRolesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutRolesInputSchema: z.ZodType<Prisma.UserUpsertWithoutRolesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutRolesInputSchema;
