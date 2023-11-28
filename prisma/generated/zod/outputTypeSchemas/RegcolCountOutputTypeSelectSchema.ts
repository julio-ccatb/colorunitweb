import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RegcolCountOutputTypeSelectSchema: z.ZodType<Prisma.RegcolCountOutputTypeSelect> = z.object({
  regcolbases: z.boolean().optional(),
  regcolcolorants: z.boolean().optional(),
}).strict();

export default RegcolCountOutputTypeSelectSchema;
