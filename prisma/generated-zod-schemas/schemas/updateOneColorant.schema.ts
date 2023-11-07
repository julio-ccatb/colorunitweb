import { z } from 'zod';
import { ColorantSelectObjectSchema } from './objects/ColorantSelect.schema';
import { ColorantUpdateInputObjectSchema } from './objects/ColorantUpdateInput.schema';
import { ColorantUncheckedUpdateInputObjectSchema } from './objects/ColorantUncheckedUpdateInput.schema';
import { ColorantWhereUniqueInputObjectSchema } from './objects/ColorantWhereUniqueInput.schema';

export const ColorantUpdateOneSchema = z.object({
  select: ColorantSelectObjectSchema.optional(),
  data: z.union([
    ColorantUpdateInputObjectSchema,
    ColorantUncheckedUpdateInputObjectSchema,
  ]),
  where: ColorantWhereUniqueInputObjectSchema,
});
