import { z } from 'zod';
import { RegColBasesOrderByWithRelationInputObjectSchema } from './objects/RegColBasesOrderByWithRelationInput.schema';
import { RegColBasesWhereInputObjectSchema } from './objects/RegColBasesWhereInput.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './objects/RegColBasesWhereUniqueInput.schema';
import { RegColBasesCountAggregateInputObjectSchema } from './objects/RegColBasesCountAggregateInput.schema';
import { RegColBasesMinAggregateInputObjectSchema } from './objects/RegColBasesMinAggregateInput.schema';
import { RegColBasesMaxAggregateInputObjectSchema } from './objects/RegColBasesMaxAggregateInput.schema';
import { RegColBasesAvgAggregateInputObjectSchema } from './objects/RegColBasesAvgAggregateInput.schema';
import { RegColBasesSumAggregateInputObjectSchema } from './objects/RegColBasesSumAggregateInput.schema';

export const RegColBasesAggregateSchema = z.object({
  orderBy: z
    .union([
      RegColBasesOrderByWithRelationInputObjectSchema,
      RegColBasesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegColBasesWhereInputObjectSchema.optional(),
  cursor: RegColBasesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RegColBasesCountAggregateInputObjectSchema])
    .optional(),
  _min: RegColBasesMinAggregateInputObjectSchema.optional(),
  _max: RegColBasesMaxAggregateInputObjectSchema.optional(),
  _avg: RegColBasesAvgAggregateInputObjectSchema.optional(),
  _sum: RegColBasesSumAggregateInputObjectSchema.optional(),
});
