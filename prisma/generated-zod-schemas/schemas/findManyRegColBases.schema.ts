import { z } from 'zod';
import { RegColBasesSelectObjectSchema } from './objects/RegColBasesSelect.schema';
import { RegColBasesOrderByWithRelationInputObjectSchema } from './objects/RegColBasesOrderByWithRelationInput.schema';
import { RegColBasesWhereInputObjectSchema } from './objects/RegColBasesWhereInput.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './objects/RegColBasesWhereUniqueInput.schema';
import { RegColBasesScalarFieldEnumSchema } from './enums/RegColBasesScalarFieldEnum.schema';

export const RegColBasesFindManySchema = z.object({
  select: z.lazy(() => RegColBasesSelectObjectSchema.optional()),
  orderBy: z
    .union([
      RegColBasesOrderByWithRelationInputObjectSchema,
      RegColBasesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RegColBasesWhereInputObjectSchema.optional(),
  cursor: RegColBasesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RegColBasesScalarFieldEnumSchema).optional(),
});
