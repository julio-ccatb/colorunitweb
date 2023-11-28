import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolWhereInputSchema } from '../inputTypeSchemas/RegcolWhereInputSchema'
import { RegcolOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RegcolOrderByWithAggregationInputSchema'
import { RegcolScalarFieldEnumSchema } from '../inputTypeSchemas/RegcolScalarFieldEnumSchema'
import { RegcolScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RegcolScalarWhereWithAggregatesInputSchema'

export const RegcolGroupByArgsSchema: z.ZodType<Prisma.RegcolGroupByArgs> = z.object({
  where: RegcolWhereInputSchema.optional(),
  orderBy: z.union([ RegcolOrderByWithAggregationInputSchema.array(),RegcolOrderByWithAggregationInputSchema ]).optional(),
  by: RegcolScalarFieldEnumSchema.array(),
  having: RegcolScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegcolGroupByArgsSchema;
