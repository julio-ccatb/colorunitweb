import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolSelectSchema } from '../inputTypeSchemas/RegcolSelectSchema';
import { RegcolIncludeSchema } from '../inputTypeSchemas/RegcolIncludeSchema';

export const RegcolArgsSchema: z.ZodType<Prisma.RegcolDefaultArgs> = z.object({
  select: z.lazy(() => RegcolSelectSchema).optional(),
  include: z.lazy(() => RegcolIncludeSchema).optional(),
}).strict();

export default RegcolArgsSchema;
