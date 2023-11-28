import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseCountOutputTypeSelectSchema } from './BaseCountOutputTypeSelectSchema';

export const BaseCountOutputTypeArgsSchema: z.ZodType<Prisma.BaseCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BaseCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BaseCountOutputTypeSelectSchema;
