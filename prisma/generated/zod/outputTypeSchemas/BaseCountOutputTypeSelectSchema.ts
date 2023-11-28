import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BaseCountOutputTypeSelectSchema: z.ZodType<Prisma.BaseCountOutputTypeSelect> = z.object({
  regcolbases: z.boolean().optional(),
}).strict();

export default BaseCountOutputTypeSelectSchema;
