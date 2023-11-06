import { z } from 'zod';
import { RegColOrderByWithRelationInputObjectSchema } from './objects/RegColOrderByWithRelationInput.schema';
import { RegColWhereInputObjectSchema } from './objects/RegColWhereInput.schema';
import { RegColWhereUniqueInputObjectSchema } from './objects/RegColWhereUniqueInput.schema';
import { RegColCountAggregateInputObjectSchema } from './objects/RegColCountAggregateInput.schema';
import { RegColMinAggregateInputObjectSchema } from './objects/RegColMinAggregateInput.schema';
import { RegColMaxAggregateInputObjectSchema } from './objects/RegColMaxAggregateInput.schema';
import { RegColAvgAggregateInputObjectSchema } from './objects/RegColAvgAggregateInput.schema';
import { RegColSumAggregateInputObjectSchema } from './objects/RegColSumAggregateInput.schema';

export const RegColAggregateSchema = z.object({
  orderBy: z
    .union([
      RegColOrderByWithRelationInputObjectSchema,
      RegColOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegColWhereInputObjectSchema.optional(),
  cursor: RegColWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RegColCountAggregateInputObjectSchema])
    .optional(),
  _min: RegColMinAggregateInputObjectSchema.optional(),
  _max: RegColMaxAggregateInputObjectSchema.optional(),
  _avg: RegColAvgAggregateInputObjectSchema.optional(),
  _sum: RegColSumAggregateInputObjectSchema.optional(),
});
