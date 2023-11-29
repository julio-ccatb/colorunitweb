import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedManyWithoutUserInputSchema } from './RoleCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  role: z.lazy(() => RoleCreateNestedManyWithoutUserInputSchema).optional(),
  session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutAccountInputSchema;
