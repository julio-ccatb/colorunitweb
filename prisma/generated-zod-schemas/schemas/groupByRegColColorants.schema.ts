import { z } from 'zod';
import { RegColColorantsWhereInputObjectSchema } from './objects/RegColColorantsWhereInput.schema';
import { RegColColorantsOrderByWithAggregationInputObjectSchema } from './objects/RegColColorantsOrderByWithAggregationInput.schema';
import { RegColColorantsScalarWhereWithAggregatesInputObjectSchema } from './objects/RegColColorantsScalarWhereWithAggregatesInput.schema';
import { RegColColorantsScalarFieldEnumSchema } from './enums/RegColColorantsScalarFieldEnum.schema';

export const RegColColorantsGroupBySchema = z.object({
  where: RegColColorantsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RegColColorantsOrderByWithAggregationInputObjectSchema,
      RegColColorantsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RegColColorantsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RegColColorantsScalarFieldEnumSchema),
});
