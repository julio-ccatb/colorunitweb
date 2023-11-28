import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseCreateManyInputSchema } from '../inputTypeSchemas/BaseCreateManyInputSchema'

export const BaseCreateManyArgsSchema: z.ZodType<Prisma.BaseCreateManyArgs> = z.object({
  data: z.union([ BaseCreateManyInputSchema,BaseCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default BaseCreateManyArgsSchema;
