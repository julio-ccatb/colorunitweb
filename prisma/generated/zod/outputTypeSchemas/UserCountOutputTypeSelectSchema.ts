import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  account: z.boolean().optional(),
  role: z.boolean().optional(),
  session: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
