import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseSelectSchema } from '../inputTypeSchemas/TbaseSelectSchema';
import { TbaseIncludeSchema } from '../inputTypeSchemas/TbaseIncludeSchema';

export const TbaseArgsSchema: z.ZodType<Prisma.TbaseDefaultArgs> = z.object({
  select: z.lazy(() => TbaseSelectSchema).optional(),
  include: z.lazy(() => TbaseIncludeSchema).optional(),
}).strict();

export default TbaseArgsSchema;
