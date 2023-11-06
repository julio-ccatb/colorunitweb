import { z } from 'zod';
import { TBaseSelectObjectSchema } from './objects/TBaseSelect.schema';
import { TBaseOrderByWithRelationInputObjectSchema } from './objects/TBaseOrderByWithRelationInput.schema';
import { TBaseWhereInputObjectSchema } from './objects/TBaseWhereInput.schema';
import { TBaseWhereUniqueInputObjectSchema } from './objects/TBaseWhereUniqueInput.schema';
import { TBaseScalarFieldEnumSchema } from './enums/TBaseScalarFieldEnum.schema';

export const TBaseFindFirstSchema = z.object({
  select: TBaseSelectObjectSchema.optional(),
  orderBy: z
    .union([
      TBaseOrderByWithRelationInputObjectSchema,
      TBaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TBaseWhereInputObjectSchema.optional(),
  cursor: TBaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TBaseScalarFieldEnumSchema).optional(),
});
