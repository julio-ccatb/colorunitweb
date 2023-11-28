import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseWhereInputSchema } from '../inputTypeSchemas/TbaseWhereInputSchema'
import { TbaseOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TbaseOrderByWithAggregationInputSchema'
import { TbaseScalarFieldEnumSchema } from '../inputTypeSchemas/TbaseScalarFieldEnumSchema'
import { TbaseScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TbaseScalarWhereWithAggregatesInputSchema'

export const TbaseGroupByArgsSchema: z.ZodType<Prisma.TbaseGroupByArgs> = z.object({
  where: TbaseWhereInputSchema.optional(),
  orderBy: z.union([ TbaseOrderByWithAggregationInputSchema.array(),TbaseOrderByWithAggregationInputSchema ]).optional(),
  by: TbaseScalarFieldEnumSchema.array(),
  having: TbaseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TbaseGroupByArgsSchema;
