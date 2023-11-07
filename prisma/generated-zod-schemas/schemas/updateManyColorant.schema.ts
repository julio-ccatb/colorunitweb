import { z } from 'zod';
import { ColorantUpdateManyMutationInputObjectSchema } from './objects/ColorantUpdateManyMutationInput.schema';
import { ColorantWhereInputObjectSchema } from './objects/ColorantWhereInput.schema';

export const ColorantUpdateManySchema = z.object({
  data: ColorantUpdateManyMutationInputObjectSchema,
  where: ColorantWhereInputObjectSchema.optional(),
});
