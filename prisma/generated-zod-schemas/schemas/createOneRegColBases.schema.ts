import { z } from 'zod';
import { RegColBasesSelectObjectSchema } from './objects/RegColBasesSelect.schema';
import { RegColBasesCreateInputObjectSchema } from './objects/RegColBasesCreateInput.schema';
import { RegColBasesUncheckedCreateInputObjectSchema } from './objects/RegColBasesUncheckedCreateInput.schema';

export const RegColBasesCreateOneSchema = z.object({
  select: RegColBasesSelectObjectSchema.optional(),
  data: z.union([
    RegColBasesCreateInputObjectSchema,
    RegColBasesUncheckedCreateInputObjectSchema,
  ]),
});
