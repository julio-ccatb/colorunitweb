import { z } from 'zod';
import { RegColSelectObjectSchema } from './objects/RegColSelect.schema';
import { RegColOrderByWithRelationInputObjectSchema } from './objects/RegColOrderByWithRelationInput.schema';
import { RegColWhereInputObjectSchema } from './objects/RegColWhereInput.schema';
import { RegColWhereUniqueInputObjectSchema } from './objects/RegColWhereUniqueInput.schema';
import { RegColScalarFieldEnumSchema } from './enums/RegColScalarFieldEnum.schema';

export const RegColFindManySchema = z.object({
  select: z.lazy(() => RegColSelectObjectSchema.optional()),
  orderBy: z
    .union([
      RegColOrderByWithRelationInputObjectSchema,
      RegColOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegColWhereInputObjectSchema.optional(),
  cursor: RegColWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RegColScalarFieldEnumSchema).optional(),
});
