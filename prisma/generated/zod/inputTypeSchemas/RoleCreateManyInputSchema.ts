import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z.object({
  roleId: z.string(),
  userId: z.string()
}).strict();

export default RoleCreateManyInputSchema;
