import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesWhereInputSchema } from '../inputTypeSchemas/RegcolbasesWhereInputSchema'
import { RegcolbasesOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegcolbasesOrderByWithRelationInputSchema'
import { RegcolbasesWhereUniqueInputSchema } from '../inputTypeSchemas/RegcolbasesWhereUniqueInputSchema'

export const RegcolbasesAggregateArgsSchema: z.ZodType<Prisma.RegcolbasesAggregateArgs> = z.object({
  where: RegcolbasesWhereInputSchema.optional(),
  orderBy: z.union([ RegcolbasesOrderByWithRelationInputSchema.array(),RegcolbasesOrderByWithRelationInputSchema ]).optional(),
  cursor: RegcolbasesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegcolbasesAggregateArgsSchema;
