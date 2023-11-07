import { z } from 'zod';
import { RegColBasesCreateManyInputObjectSchema } from './objects/RegColBasesCreateManyInput.schema';

export const RegColBasesCreateManySchema = z.object({
  data: z.union([
    RegColBasesCreateManyInputObjectSchema,
    z.array(RegColBasesCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
