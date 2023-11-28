import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseCountOutputTypeSelectSchema } from './TbaseCountOutputTypeSelectSchema';

export const TbaseCountOutputTypeArgsSchema: z.ZodType<Prisma.TbaseCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TbaseCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TbaseCountOutputTypeSelectSchema;
