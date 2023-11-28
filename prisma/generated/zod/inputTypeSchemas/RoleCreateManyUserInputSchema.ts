import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleCreateManyUserInputSchema: z.ZodType<Prisma.RoleCreateManyUserInput> = z.object({
  roleId: z.string()
}).strict();

export default RoleCreateManyUserInputSchema;
