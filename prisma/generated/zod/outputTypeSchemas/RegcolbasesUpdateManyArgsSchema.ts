import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesUpdateManyMutationInputSchema } from '../inputTypeSchemas/RegcolbasesUpdateManyMutationInputSchema'
import { RegcolbasesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RegcolbasesUncheckedUpdateManyInputSchema'
import { RegcolbasesWhereInputSchema } from '../inputTypeSchemas/RegcolbasesWhereInputSchema'

export const RegcolbasesUpdateManyArgsSchema: z.ZodType<Prisma.RegcolbasesUpdateManyArgs> = z.object({
  data: z.union([ RegcolbasesUpdateManyMutationInputSchema,RegcolbasesUncheckedUpdateManyInputSchema ]),
  where: RegcolbasesWhereInputSchema.optional(),
}).strict()

export default RegcolbasesUpdateManyArgsSchema;
