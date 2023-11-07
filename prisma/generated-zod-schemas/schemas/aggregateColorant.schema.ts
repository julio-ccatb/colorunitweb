import { z } from 'zod';
import { ColorantOrderByWithRelationInputObjectSchema } from './objects/ColorantOrderByWithRelationInput.schema';
import { ColorantWhereInputObjectSchema } from './objects/ColorantWhereInput.schema';
import { ColorantWhereUniqueInputObjectSchema } from './objects/ColorantWhereUniqueInput.schema';
import { ColorantCountAggregateInputObjectSchema } from './objects/ColorantCountAggregateInput.schema';
import { ColorantMinAggregateInputObjectSchema } from './objects/ColorantMinAggregateInput.schema';
import { ColorantMaxAggregateInputObjectSchema } from './objects/ColorantMaxAggregateInput.schema';
import { ColorantAvgAggregateInputObjectSchema } from './objects/ColorantAvgAggregateInput.schema';
import { ColorantSumAggregateInputObjectSchema } from './objects/ColorantSumAggregateInput.schema';

export const ColorantAggregateSchema = z.object({
  orderBy: z
    .union([
      ColorantOrderByWithRelationInputObjectSchema,
      ColorantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ColorantWhereInputObjectSchema.optional(),
  cursor: ColorantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ColorantCountAggregateInputObjectSchema])
    .optional(),
  _min: ColorantMinAggregateInputObjectSchema.optional(),
  _max: ColorantMaxAggregateInputObjectSchema.optional(),
  _avg: ColorantAvgAggregateInputObjectSchema.optional(),
  _sum: ColorantSumAggregateInputObjectSchema.optional(),
});
