import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolCountOutputTypeSelectSchema } from './RegcolCountOutputTypeSelectSchema';

export const RegcolCountOutputTypeArgsSchema: z.ZodType<Prisma.RegcolCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RegcolCountOutputTypeSelectSchema).nullish(),
}).strict();

export default RegcolCountOutputTypeSelectSchema;
