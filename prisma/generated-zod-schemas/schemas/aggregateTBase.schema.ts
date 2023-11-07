import { z } from 'zod';
import { TBaseOrderByWithRelationInputObjectSchema } from './objects/TBaseOrderByWithRelationInput.schema';
import { TBaseWhereInputObjectSchema } from './objects/TBaseWhereInput.schema';
import { TBaseWhereUniqueInputObjectSchema } from './objects/TBaseWhereUniqueInput.schema';
import { TBaseCountAggregateInputObjectSchema } from './objects/TBaseCountAggregateInput.schema';
import { TBaseMinAggregateInputObjectSchema } from './objects/TBaseMinAggregateInput.schema';
import { TBaseMaxAggregateInputObjectSchema } from './objects/TBaseMaxAggregateInput.schema';
import { TBaseAvgAggregateInputObjectSchema } from './objects/TBaseAvgAggregateInput.schema';
import { TBaseSumAggregateInputObjectSchema } from './objects/TBaseSumAggregateInput.schema';

export const TBaseAggregateSchema = z.object({
  orderBy: z
    .union([
      TBaseOrderByWithRelationInputObjectSchema,
      TBaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TBaseWhereInputObjectSchema.optional(),
  cursor: TBaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TBaseCountAggregateInputObjectSchema])
    .optional(),
  _min: TBaseMinAggregateInputObjectSchema.optional(),
  _max: TBaseMaxAggregateInputObjectSchema.optional(),
  _avg: TBaseAvgAggregateInputObjectSchema.optional(),
  _sum: TBaseSumAggregateInputObjectSchema.optional(),
});
