import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsUpdateManyMutationInputSchema } from '../inputTypeSchemas/RegcolcolorantsUpdateManyMutationInputSchema'
import { RegcolcolorantsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RegcolcolorantsUncheckedUpdateManyInputSchema'
import { RegcolcolorantsWhereInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereInputSchema'

export const RegcolcolorantsUpdateManyArgsSchema: z.ZodType<Prisma.RegcolcolorantsUpdateManyArgs> = z.object({
  data: z.union([ RegcolcolorantsUpdateManyMutationInputSchema,RegcolcolorantsUncheckedUpdateManyInputSchema ]),
  where: RegcolcolorantsWhereInputSchema.optional(),
}).strict()

export default RegcolcolorantsUpdateManyArgsSchema;
