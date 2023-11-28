import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantWhereInputSchema } from '../inputTypeSchemas/ColorantWhereInputSchema'
import { ColorantOrderByWithRelationInputSchema } from '../inputTypeSchemas/ColorantOrderByWithRelationInputSchema'
import { ColorantWhereUniqueInputSchema } from '../inputTypeSchemas/ColorantWhereUniqueInputSchema'

export const ColorantAggregateArgsSchema: z.ZodType<Prisma.ColorantAggregateArgs> = z.object({
  where: ColorantWhereInputSchema.optional(),
  orderBy: z.union([ ColorantOrderByWithRelationInputSchema.array(),ColorantOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ColorantAggregateArgsSchema;
