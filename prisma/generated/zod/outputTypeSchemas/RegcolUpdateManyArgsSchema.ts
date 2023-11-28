import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolUpdateManyMutationInputSchema } from '../inputTypeSchemas/RegcolUpdateManyMutationInputSchema'
import { RegcolUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RegcolUncheckedUpdateManyInputSchema'
import { RegcolWhereInputSchema } from '../inputTypeSchemas/RegcolWhereInputSchema'

export const RegcolUpdateManyArgsSchema: z.ZodType<Prisma.RegcolUpdateManyArgs> = z.object({
  data: z.union([ RegcolUpdateManyMutationInputSchema,RegcolUncheckedUpdateManyInputSchema ]),
  where: RegcolWhereInputSchema.optional(),
}).strict()

export default RegcolUpdateManyArgsSchema;
