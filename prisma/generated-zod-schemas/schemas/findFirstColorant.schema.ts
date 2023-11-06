import { z } from 'zod';
import { ColorantSelectObjectSchema } from './objects/ColorantSelect.schema';
import { ColorantOrderByWithRelationInputObjectSchema } from './objects/ColorantOrderByWithRelationInput.schema';
import { ColorantWhereInputObjectSchema } from './objects/ColorantWhereInput.schema';
import { ColorantWhereUniqueInputObjectSchema } from './objects/ColorantWhereUniqueInput.schema';
import { ColorantScalarFieldEnumSchema } from './enums/ColorantScalarFieldEnum.schema';

export const ColorantFindFirstSchema = z.object({
  select: ColorantSelectObjectSchema.optional(),
  orderBy: z
    .union([
      ColorantOrderByWithRelationInputObjectSchema,
      ColorantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ColorantWhereInputObjectSchema.optional(),
  cursor: ColorantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ColorantScalarFieldEnumSchema).optional(),
});
