import { z } from 'zod';
import { RegColColorantsSelectObjectSchema } from './objects/RegColColorantsSelect.schema';
import { RegColColorantsOrderByWithRelationInputObjectSchema } from './objects/RegColColorantsOrderByWithRelationInput.schema';
import { RegColColorantsWhereInputObjectSchema } from './objects/RegColColorantsWhereInput.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './objects/RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsScalarFieldEnumSchema } from './enums/RegColColorantsScalarFieldEnum.schema';

export const RegColColorantsFindManySchema = z.object({
  select: z.lazy(() => RegColColorantsSelectObjectSchema.optional()),
  orderBy: z
    .union([
      RegColColorantsOrderByWithRelationInputObjectSchema,
      RegColColorantsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegColColorantsWhereInputObjectSchema.optional(),
  cursor: RegColColorantsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RegColColorantsScalarFieldEnumSchema).optional(),
});
