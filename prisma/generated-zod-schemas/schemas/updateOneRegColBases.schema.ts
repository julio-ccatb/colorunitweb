import { z } from 'zod';
import { RegColBasesSelectObjectSchema } from './objects/RegColBasesSelect.schema';
import { RegColBasesUpdateInputObjectSchema } from './objects/RegColBasesUpdateInput.schema';
import { RegColBasesUncheckedUpdateInputObjectSchema } from './objects/RegColBasesUncheckedUpdateInput.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './objects/RegColBasesWhereUniqueInput.schema';

export const RegColBasesUpdateOneSchema = z.object({
  select: RegColBasesSelectObjectSchema.optional(),
  data: z.union([
    RegColBasesUpdateInputObjectSchema,
    RegColBasesUncheckedUpdateInputObjectSchema,
  ]),
  where: RegColBasesWhereUniqueInputObjectSchema,
});
