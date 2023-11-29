import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { RoleCreateNestedManyWithoutUserInputSchema } from './RoleCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  role: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutSessionInputSchema;
