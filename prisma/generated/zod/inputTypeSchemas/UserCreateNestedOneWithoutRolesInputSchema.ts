import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutRolesInputSchema } from './UserCreateWithoutRolesInputSchema';
import { UserUncheckedCreateWithoutRolesInputSchema } from './UserUncheckedCreateWithoutRolesInputSchema';
import { UserCreateOrConnectWithoutRolesInputSchema } from './UserCreateOrConnectWithoutRolesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutRolesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutRolesInputSchema;
