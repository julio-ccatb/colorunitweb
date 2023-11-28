import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutRolesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRolesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutRolesInputSchema;
