import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleCreateWithoutUserInputSchema: z.ZodType<Prisma.RoleCreateWithoutUserInput> = z.object({
  roleId: z.string()
}).strict();

export default RoleCreateWithoutUserInputSchema;
