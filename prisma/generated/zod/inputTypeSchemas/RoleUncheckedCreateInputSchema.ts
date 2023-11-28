import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  roleId: z.string(),
  userId: z.string()
}).strict();

export default RoleUncheckedCreateInputSchema;
