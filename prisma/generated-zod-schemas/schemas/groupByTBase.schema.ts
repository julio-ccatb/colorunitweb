import { z } from 'zod';
import { TBaseWhereInputObjectSchema } from './objects/TBaseWhereInput.schema';
import { TBaseOrderByWithAggregationInputObjectSchema } from './objects/TBaseOrderByWithAggregationInput.schema';
import { TBaseScalarWhereWithAggregatesInputObjectSchema } from './objects/TBaseScalarWhereWithAggregatesInput.schema';
import { TBaseScalarFieldEnumSchema } from './enums/TBaseScalarFieldEnum.schema';

export const TBaseGroupBySchema = z.object({
  where: TBaseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TBaseOrderByWithAggregationInputObjectSchema,
      TBaseOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TBaseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TBaseScalarFieldEnumSchema),
});
