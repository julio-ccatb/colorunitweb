import { z } from 'zod';
import { ColorantSelectObjectSchema } from './objects/ColorantSelect.schema';
import { ColorantWhereUniqueInputObjectSchema } from './objects/ColorantWhereUniqueInput.schema';
import { ColorantCreateInputObjectSchema } from './objects/ColorantCreateInput.schema';
import { ColorantUncheckedCreateInputObjectSchema } from './objects/ColorantUncheckedCreateInput.schema';
import { ColorantUpdateInputObjectSchema } from './objects/ColorantUpdateInput.schema';
import { ColorantUncheckedUpdateInputObjectSchema } from './objects/ColorantUncheckedUpdateInput.schema';

export const ColorantUpsertSchema = z.object({
  select: ColorantSelectObjectSchema.optional(),
  where: ColorantWhereUniqueInputObjectSchema,
  create: z.union([
    ColorantCreateInputObjectSchema,
    ColorantUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ColorantUpdateInputObjectSchema,
    ColorantUncheckedUpdateInputObjectSchema,
  ]),
});
