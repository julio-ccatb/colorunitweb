import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsSelectSchema } from '../inputTypeSchemas/RegcolcolorantsSelectSchema';
import { RegcolcolorantsIncludeSchema } from '../inputTypeSchemas/RegcolcolorantsIncludeSchema';

export const RegcolcolorantsArgsSchema: z.ZodType<Prisma.RegcolcolorantsDefaultArgs> = z.object({
  select: z.lazy(() => RegcolcolorantsSelectSchema).optional(),
  include: z.lazy(() => RegcolcolorantsIncludeSchema).optional(),
}).strict();

export default RegcolcolorantsArgsSchema;
