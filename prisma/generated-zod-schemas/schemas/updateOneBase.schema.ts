import { z } from 'zod';
import { BaseSelectObjectSchema } from './objects/BaseSelect.schema';
import { BaseUpdateInputObjectSchema } from './objects/BaseUpdateInput.schema';
import { BaseUncheckedUpdateInputObjectSchema } from './objects/BaseUncheckedUpdateInput.schema';
import { BaseWhereUniqueInputObjectSchema } from './objects/BaseWhereUniqueInput.schema';

export const BaseUpdateOneSchema = z.object({
  select: BaseSelectObjectSchema.optional(),
  data: z.union([
    BaseUpdateInputObjectSchema,
    BaseUncheckedUpdateInputObjectSchema,
  ]),
  where: BaseWhereUniqueInputObjectSchema,
});
