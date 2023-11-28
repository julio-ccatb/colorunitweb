import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutRolesInputSchema } from './UserCreateWithoutRolesInputSchema';
import { UserUncheckedCreateWithoutRolesInputSchema } from './UserUncheckedCreateWithoutRolesInputSchema';
import { UserCreateOrConnectWithoutRolesInputSchema } from './UserCreateOrConnectWithoutRolesInputSchema';
import { UserUpsertWithoutRolesInputSchema } from './UserUpsertWithoutRolesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutRolesInputSchema } from './UserUpdateToOneWithWhereWithoutRolesInputSchema';
import { UserUpdateWithoutRolesInputSchema } from './UserUpdateWithoutRolesInputSchema';
import { UserUncheckedUpdateWithoutRolesInputSchema } from './UserUncheckedUpdateWithoutRolesInputSchema';

export const UserUpdateOneRequiredWithoutRolesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRolesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRolesInputSchema),z.lazy(() => UserUpdateWithoutRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRolesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutRolesNestedInputSchema;
