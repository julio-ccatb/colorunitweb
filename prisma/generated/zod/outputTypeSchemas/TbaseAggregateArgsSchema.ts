import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseWhereInputSchema } from '../inputTypeSchemas/TbaseWhereInputSchema'
import { TbaseOrderByWithRelationInputSchema } from '../inputTypeSchemas/TbaseOrderByWithRelationInputSchema'
import { TbaseWhereUniqueInputSchema } from '../inputTypeSchemas/TbaseWhereUniqueInputSchema'

export const TbaseAggregateArgsSchema: z.ZodType<Prisma.TbaseAggregateArgs> = z.object({
  where: TbaseWhereInputSchema.optional(),
  orderBy: z.union([ TbaseOrderByWithRelationInputSchema.array(),TbaseOrderByWithRelationInputSchema ]).optional(),
  cursor: TbaseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TbaseAggregateArgsSchema;
