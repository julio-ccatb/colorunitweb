import { z } from 'zod';
import { ColorantWhereInputObjectSchema } from './objects/ColorantWhereInput.schema';

export const ColorantDeleteManySchema = z.object({
  where: ColorantWhereInputObjectSchema.optional(),
});
