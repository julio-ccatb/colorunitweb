import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseWhereInputSchema } from '../inputTypeSchemas/BaseWhereInputSchema'
import { BaseOrderByWithRelationInputSchema } from '../inputTypeSchemas/BaseOrderByWithRelationInputSchema'
import { BaseWhereUniqueInputSchema } from '../inputTypeSchemas/BaseWhereUniqueInputSchema'

export const BaseAggregateArgsSchema: z.ZodType<Prisma.BaseAggregateArgs> = z.object({
  where: BaseWhereInputSchema.optional(),
  orderBy: z.union([ BaseOrderByWithRelationInputSchema.array(),BaseOrderByWithRelationInputSchema ]).optional(),
  cursor: BaseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default BaseAggregateArgsSchema;
