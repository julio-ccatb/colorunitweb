import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesSelectSchema } from '../inputTypeSchemas/RegcolbasesSelectSchema';
import { RegcolbasesIncludeSchema } from '../inputTypeSchemas/RegcolbasesIncludeSchema';

export const RegcolbasesArgsSchema: z.ZodType<Prisma.RegcolbasesDefaultArgs> = z.object({
  select: z.lazy(() => RegcolbasesSelectSchema).optional(),
  include: z.lazy(() => RegcolbasesIncludeSchema).optional(),
}).strict();

export default RegcolbasesArgsSchema;
