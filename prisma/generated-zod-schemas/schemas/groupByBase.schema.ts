import { z } from 'zod';
import { BaseWhereInputObjectSchema } from './objects/BaseWhereInput.schema';
import { BaseOrderByWithAggregationInputObjectSchema } from './objects/BaseOrderByWithAggregationInput.schema';
import { BaseScalarWhereWithAggregatesInputObjectSchema } from './objects/BaseScalarWhereWithAggregatesInput.schema';
import { BaseScalarFieldEnumSchema } from './enums/BaseScalarFieldEnum.schema';

export const BaseGroupBySchema = z.object({
  where: BaseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BaseOrderByWithAggregationInputObjectSchema,
      BaseOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BaseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BaseScalarFieldEnumSchema),
});
