import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesWhereInputSchema } from '../inputTypeSchemas/RegcolbasesWhereInputSchema'
import { RegcolbasesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RegcolbasesOrderByWithAggregationInputSchema'
import { RegcolbasesScalarFieldEnumSchema } from '../inputTypeSchemas/RegcolbasesScalarFieldEnumSchema'
import { RegcolbasesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RegcolbasesScalarWhereWithAggregatesInputSchema'

export const RegcolbasesGroupByArgsSchema: z.ZodType<Prisma.RegcolbasesGroupByArgs> = z.object({
  where: RegcolbasesWhereInputSchema.optional(),
  orderBy: z.union([ RegcolbasesOrderByWithAggregationInputSchema.array(),RegcolbasesOrderByWithAggregationInputSchema ]).optional(),
  by: RegcolbasesScalarFieldEnumSchema.array(),
  having: RegcolbasesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegcolbasesGroupByArgsSchema;
