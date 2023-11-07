import { z } from 'zod';
import { RegColWhereInputObjectSchema } from './objects/RegColWhereInput.schema';
import { RegColOrderByWithAggregationInputObjectSchema } from './objects/RegColOrderByWithAggregationInput.schema';
import { RegColScalarWhereWithAggregatesInputObjectSchema } from './objects/RegColScalarWhereWithAggregatesInput.schema';
import { RegColScalarFieldEnumSchema } from './enums/RegColScalarFieldEnum.schema';

export const RegColGroupBySchema = z.object({
  where: RegColWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RegColOrderByWithAggregationInputObjectSchema,
      RegColOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RegColScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RegColScalarFieldEnumSchema),
});
