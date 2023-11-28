import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsWhereInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereInputSchema'
import { RegcolcolorantsOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegcolcolorantsOrderByWithRelationInputSchema'
import { RegcolcolorantsWhereUniqueInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereUniqueInputSchema'

export const RegcolcolorantsAggregateArgsSchema: z.ZodType<Prisma.RegcolcolorantsAggregateArgs> = z.object({
  where: RegcolcolorantsWhereInputSchema.optional(),
  orderBy: z.union([ RegcolcolorantsOrderByWithRelationInputSchema.array(),RegcolcolorantsOrderByWithRelationInputSchema ]).optional(),
  cursor: RegcolcolorantsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegcolcolorantsAggregateArgsSchema;
