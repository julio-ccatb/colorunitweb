import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutUserInputSchema } from './RoleUncheckedCreateNestedManyWithoutUserInputSchema';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  roles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSessionInputSchema;
