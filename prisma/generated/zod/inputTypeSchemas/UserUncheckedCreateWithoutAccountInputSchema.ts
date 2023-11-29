import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutUserInputSchema } from './RoleUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  role: z.lazy(() => RoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutAccountInputSchema;
