import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseCreateManyInputSchema } from '../inputTypeSchemas/TbaseCreateManyInputSchema'

export const TbaseCreateManyArgsSchema: z.ZodType<Prisma.TbaseCreateManyArgs> = z.object({
  data: z.union([ TbaseCreateManyInputSchema,TbaseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TbaseCreateManyArgsSchema;
