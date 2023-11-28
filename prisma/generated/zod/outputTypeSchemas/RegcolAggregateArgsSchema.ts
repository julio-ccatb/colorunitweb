import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolWhereInputSchema } from '../inputTypeSchemas/RegcolWhereInputSchema'
import { RegcolOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegcolOrderByWithRelationInputSchema'
import { RegcolWhereUniqueInputSchema } from '../inputTypeSchemas/RegcolWhereUniqueInputSchema'

export const RegcolAggregateArgsSchema: z.ZodType<Prisma.RegcolAggregateArgs> = z.object({
  where: RegcolWhereInputSchema.optional(),
  orderBy: z.union([ RegcolOrderByWithRelationInputSchema.array(),RegcolOrderByWithRelationInputSchema ]).optional(),
  cursor: RegcolWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default RegcolAggregateArgsSchema;
