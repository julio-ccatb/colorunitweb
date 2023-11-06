import { z } from 'zod';
import { ColorantWhereInputObjectSchema } from './objects/ColorantWhereInput.schema';
import { ColorantOrderByWithAggregationInputObjectSchema } from './objects/ColorantOrderByWithAggregationInput.schema';
import { ColorantScalarWhereWithAggregatesInputObjectSchema } from './objects/ColorantScalarWhereWithAggregatesInput.schema';
import { ColorantScalarFieldEnumSchema } from './enums/ColorantScalarFieldEnum.schema';

export const ColorantGroupBySchema = z.object({
  where: ColorantWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ColorantOrderByWithAggregationInputObjectSchema,
      ColorantOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ColorantScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ColorantScalarFieldEnumSchema),
});
