import { z } from 'zod';
import { BaseSelectObjectSchema } from './objects/BaseSelect.schema';
import { BaseWhereUniqueInputObjectSchema } from './objects/BaseWhereUniqueInput.schema';
import { BaseCreateInputObjectSchema } from './objects/BaseCreateInput.schema';
import { BaseUncheckedCreateInputObjectSchema } from './objects/BaseUncheckedCreateInput.schema';
import { BaseUpdateInputObjectSchema } from './objects/BaseUpdateInput.schema';
import { BaseUncheckedUpdateInputObjectSchema } from './objects/BaseUncheckedUpdateInput.schema';

export const BaseUpsertSchema = z.object({
  select: BaseSelectObjectSchema.optional(),
  where: BaseWhereUniqueInputObjectSchema,
  create: z.union([
    BaseCreateInputObjectSchema,
    BaseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BaseUpdateInputObjectSchema,
    BaseUncheckedUpdateInputObjectSchema,
  ]),
});
