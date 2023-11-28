import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedManyWithoutUserInputSchema } from './RoleCreateNestedManyWithoutUserInputSchema';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  roles: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional(),
  account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
