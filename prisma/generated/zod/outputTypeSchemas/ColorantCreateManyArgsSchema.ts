import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantCreateManyInputSchema } from '../inputTypeSchemas/ColorantCreateManyInputSchema'

export const ColorantCreateManyArgsSchema: z.ZodType<Prisma.ColorantCreateManyArgs> = z.object({
  data: z.union([ ColorantCreateManyInputSchema,ColorantCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ColorantCreateManyArgsSchema;
