import { z } from 'zod';
import { RegColColorantsOrderByWithRelationInputObjectSchema } from './objects/RegColColorantsOrderByWithRelationInput.schema';
import { RegColColorantsWhereInputObjectSchema } from './objects/RegColColorantsWhereInput.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './objects/RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsCountAggregateInputObjectSchema } from './objects/RegColColorantsCountAggregateInput.schema';
import { RegColColorantsMinAggregateInputObjectSchema } from './objects/RegColColorantsMinAggregateInput.schema';
import { RegColColorantsMaxAggregateInputObjectSchema } from './objects/RegColColorantsMaxAggregateInput.schema';
import { RegColColorantsAvgAggregateInputObjectSchema } from './objects/RegColColorantsAvgAggregateInput.schema';
import { RegColColorantsSumAggregateInputObjectSchema } from './objects/RegColColorantsSumAggregateInput.schema';

export const RegColColorantsAggregateSchema = z.object({
  orderBy: z
    .union([
      RegColColorantsOrderByWithRelationInputObjectSchema,
      RegColColorantsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegColColorantsWhereInputObjectSchema.optional(),
  cursor: RegColColorantsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RegColColorantsCountAggregateInputObjectSchema])
    .optional(),
  _min: RegColColorantsMinAggregateInputObjectSchema.optional(),
  _max: RegColColorantsMaxAggregateInputObjectSchema.optional(),
  _avg: RegColColorantsAvgAggregateInputObjectSchema.optional(),
  _sum: RegColColorantsSumAggregateInputObjectSchema.optional(),
});
