import { z } from 'zod';
import { RegColBasesWhereInputObjectSchema } from './objects/RegColBasesWhereInput.schema';
import { RegColBasesOrderByWithAggregationInputObjectSchema } from './objects/RegColBasesOrderByWithAggregationInput.schema';
import { RegColBasesScalarWhereWithAggregatesInputObjectSchema } from './objects/RegColBasesScalarWhereWithAggregatesInput.schema';
import { RegColBasesScalarFieldEnumSchema } from './enums/RegColBasesScalarFieldEnum.schema';

export const RegColBasesGroupBySchema = z.object({
  where: RegColBasesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RegColBasesOrderByWithAggregationInputObjectSchema,
      RegColBasesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RegColBasesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RegColBasesScalarFieldEnumSchema),
});
