import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseWhereInputSchema } from '../inputTypeSchemas/BaseWhereInputSchema'
import { BaseOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BaseOrderByWithAggregationInputSchema'
import { BaseScalarFieldEnumSchema } from '../inputTypeSchemas/BaseScalarFieldEnumSchema'
import { BaseScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BaseScalarWhereWithAggregatesInputSchema'

export const BaseGroupByArgsSchema: z.ZodType<Prisma.BaseGroupByArgs> = z.object({
  where: BaseWhereInputSchema.optional(),
  orderBy: z.union([ BaseOrderByWithAggregationInputSchema.array(),BaseOrderByWithAggregationInputSchema ]).optional(),
  by: BaseScalarFieldEnumSchema.array(),
  having: BaseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default BaseGroupByArgsSchema;
