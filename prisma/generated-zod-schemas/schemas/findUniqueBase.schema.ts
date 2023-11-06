import { z } from 'zod';
import { BaseSelectObjectSchema } from './objects/BaseSelect.schema';
import { BaseWhereUniqueInputObjectSchema } from './objects/BaseWhereUniqueInput.schema';

export const BaseFindUniqueSchema = z.object({
  select: BaseSelectObjectSchema.optional(),
  where: BaseWhereUniqueInputObjectSchema,
});
