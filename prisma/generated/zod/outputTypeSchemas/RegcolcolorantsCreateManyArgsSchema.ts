import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsCreateManyInputSchema } from '../inputTypeSchemas/RegcolcolorantsCreateManyInputSchema'

export const RegcolcolorantsCreateManyArgsSchema: z.ZodType<Prisma.RegcolcolorantsCreateManyArgs> = z.object({
  data: z.union([ RegcolcolorantsCreateManyInputSchema,RegcolcolorantsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default RegcolcolorantsCreateManyArgsSchema;
