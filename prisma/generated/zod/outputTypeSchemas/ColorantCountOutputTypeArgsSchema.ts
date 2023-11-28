import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantCountOutputTypeSelectSchema } from './ColorantCountOutputTypeSelectSchema';

export const ColorantCountOutputTypeArgsSchema: z.ZodType<Prisma.ColorantCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ColorantCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ColorantCountOutputTypeSelectSchema;
