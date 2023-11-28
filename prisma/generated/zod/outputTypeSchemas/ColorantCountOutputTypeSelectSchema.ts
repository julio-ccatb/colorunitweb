import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ColorantCountOutputTypeSelectSchema: z.ZodType<Prisma.ColorantCountOutputTypeSelect> = z.object({
  regcolcolorants: z.boolean().optional(),
}).strict();

export default ColorantCountOutputTypeSelectSchema;
