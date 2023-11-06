import { z } from 'zod';
import { ColorantSelectObjectSchema } from './objects/ColorantSelect.schema';
import { ColorantCreateInputObjectSchema } from './objects/ColorantCreateInput.schema';
import { ColorantUncheckedCreateInputObjectSchema } from './objects/ColorantUncheckedCreateInput.schema';

export const ColorantCreateOneSchema = z.object({
  select: ColorantSelectObjectSchema.optional(),
  data: z.union([
    ColorantCreateInputObjectSchema,
    ColorantUncheckedCreateInputObjectSchema,
  ]),
});
