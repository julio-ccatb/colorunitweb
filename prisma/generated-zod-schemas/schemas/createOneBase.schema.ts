import { z } from 'zod';
import { BaseSelectObjectSchema } from './objects/BaseSelect.schema';
import { BaseCreateInputObjectSchema } from './objects/BaseCreateInput.schema';
import { BaseUncheckedCreateInputObjectSchema } from './objects/BaseUncheckedCreateInput.schema';

export const BaseCreateOneSchema = z.object({
  select: BaseSelectObjectSchema.optional(),
  data: z.union([
    BaseCreateInputObjectSchema,
    BaseUncheckedCreateInputObjectSchema,
  ]),
});
