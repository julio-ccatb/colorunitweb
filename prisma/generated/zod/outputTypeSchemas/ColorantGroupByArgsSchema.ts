import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantWhereInputSchema } from '../inputTypeSchemas/ColorantWhereInputSchema'
import { ColorantOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ColorantOrderByWithAggregationInputSchema'
import { ColorantScalarFieldEnumSchema } from '../inputTypeSchemas/ColorantScalarFieldEnumSchema'
import { ColorantScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ColorantScalarWhereWithAggregatesInputSchema'

export const ColorantGroupByArgsSchema: z.ZodType<Prisma.ColorantGroupByArgs> = z.object({
  where: ColorantWhereInputSchema.optional(),
  orderBy: z.union([ ColorantOrderByWithAggregationInputSchema.array(),ColorantOrderByWithAggregationInputSchema ]).optional(),
  by: ColorantScalarFieldEnumSchema.array(),
  having: ColorantScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ColorantGroupByArgsSchema;
