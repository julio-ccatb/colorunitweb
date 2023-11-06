import { z } from 'zod';
import { BaseSelectObjectSchema } from './objects/BaseSelect.schema';
import { BaseOrderByWithRelationInputObjectSchema } from './objects/BaseOrderByWithRelationInput.schema';
import { BaseWhereInputObjectSchema } from './objects/BaseWhereInput.schema';
import { BaseWhereUniqueInputObjectSchema } from './objects/BaseWhereUniqueInput.schema';
import { BaseScalarFieldEnumSchema } from './enums/BaseScalarFieldEnum.schema';

export const BaseFindFirstSchema = z.object({
  select: BaseSelectObjectSchema.optional(),
  orderBy: z
    .union([
      BaseOrderByWithRelationInputObjectSchema,
      BaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BaseWhereInputObjectSchema.optional(),
  cursor: BaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BaseScalarFieldEnumSchema).optional(),
});
