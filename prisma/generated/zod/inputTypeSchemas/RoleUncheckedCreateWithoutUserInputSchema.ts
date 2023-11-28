import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUserInput> = z.object({
  roleId: z.string()
}).strict();

export default RoleUncheckedCreateWithoutUserInputSchema;
