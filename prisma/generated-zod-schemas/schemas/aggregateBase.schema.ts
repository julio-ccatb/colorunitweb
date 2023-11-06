import { z } from 'zod';
import { BaseOrderByWithRelationInputObjectSchema } from './objects/BaseOrderByWithRelationInput.schema';
import { BaseWhereInputObjectSchema } from './objects/BaseWhereInput.schema';
import { BaseWhereUniqueInputObjectSchema } from './objects/BaseWhereUniqueInput.schema';
import { BaseCountAggregateInputObjectSchema } from './objects/BaseCountAggregateInput.schema';
import { BaseMinAggregateInputObjectSchema } from './objects/BaseMinAggregateInput.schema';
import { BaseMaxAggregateInputObjectSchema } from './objects/BaseMaxAggregateInput.schema';
import { BaseAvgAggregateInputObjectSchema } from './objects/BaseAvgAggregateInput.schema';
import { BaseSumAggregateInputObjectSchema } from './objects/BaseSumAggregateInput.schema';

export const BaseAggregateSchema = z.object({
  orderBy: z
    .union([
      BaseOrderByWithRelationInputObjectSchema,
      BaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BaseWhereInputObjectSchema.optional(),
  cursor: BaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BaseCountAggregateInputObjectSchema])
    .optional(),
  _min: BaseMinAggregateInputObjectSchema.optional(),
  _max: BaseMaxAggregateInputObjectSchema.optional(),
  _avg: BaseAvgAggregateInputObjectSchema.optional(),
  _sum: BaseSumAggregateInputObjectSchema.optional(),
});
