import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolCreateManyInputSchema } from '../inputTypeSchemas/RegcolCreateManyInputSchema'

export const RegcolCreateManyArgsSchema: z.ZodType<Prisma.RegcolCreateManyArgs> = z.object({
  data: z.union([ RegcolCreateManyInputSchema,RegcolCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default RegcolCreateManyArgsSchema;
