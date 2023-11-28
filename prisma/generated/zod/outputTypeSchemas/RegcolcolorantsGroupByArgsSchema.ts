import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsWhereInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereInputSchema'
import { RegcolcolorantsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RegcolcolorantsOrderByWithAggregationInputSchema'
import { RegcolcolorantsScalarFieldEnumSchema } from '../inputTypeSchemas/RegcolcolorantsScalarFieldEnumSchema'
import { RegcolcolorantsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RegcolcolorantsScalarWhereWithAggregatesInputSchema'

export const RegcolcolorantsGroupByArgsSchema: z.ZodType<Prisma.RegcolcolorantsGroupByArgs> = z.object({
  where: RegcolcolorantsWhereInputSchema.optional(),
  orderBy: z.union([ RegcolcolorantsOrderByWithAggregationInputSchema.array(),RegcolcolorantsOrderByWithAggregationInputSchema ]).optional(),
  by: RegcolcolorantsScalarFieldEnumSchema.array(),
  having: RegcolcolorantsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegcolcolorantsGroupByArgsSchema;
