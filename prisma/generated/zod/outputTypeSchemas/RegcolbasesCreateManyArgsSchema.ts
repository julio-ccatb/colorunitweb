import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesCreateManyInputSchema } from '../inputTypeSchemas/RegcolbasesCreateManyInputSchema'

export const RegcolbasesCreateManyArgsSchema: z.ZodType<Prisma.RegcolbasesCreateManyArgs> = z.object({
  data: z.union([ RegcolbasesCreateManyInputSchema,RegcolbasesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default RegcolbasesCreateManyArgsSchema;
