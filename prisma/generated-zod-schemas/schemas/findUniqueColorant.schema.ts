import { z } from 'zod';
import { ColorantSelectObjectSchema } from './objects/ColorantSelect.schema';
import { ColorantWhereUniqueInputObjectSchema } from './objects/ColorantWhereUniqueInput.schema';

export const ColorantFindUniqueSchema = z.object({
  select: ColorantSelectObjectSchema.optional(),
  where: ColorantWhereUniqueInputObjectSchema,
});
