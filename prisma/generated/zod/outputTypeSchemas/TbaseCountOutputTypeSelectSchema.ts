import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TbaseCountOutputTypeSelectSchema: z.ZodType<Prisma.TbaseCountOutputTypeSelect> = z.object({
  base: z.boolean().optional(),
  regCol: z.boolean().optional(),
}).strict();

export default TbaseCountOutputTypeSelectSchema;
