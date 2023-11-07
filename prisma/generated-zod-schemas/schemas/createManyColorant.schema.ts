import { z } from 'zod';
import { ColorantCreateManyInputObjectSchema } from './objects/ColorantCreateManyInput.schema';

export const ColorantCreateManySchema = z.object({
  data: z.union([
    ColorantCreateManyInputObjectSchema,
    z.array(ColorantCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
