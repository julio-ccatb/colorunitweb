import { z } from 'zod';
import { BaseCreateManyInputObjectSchema } from './objects/BaseCreateManyInput.schema';

export const BaseCreateManySchema = z.object({
  data: z.union([
    BaseCreateManyInputObjectSchema,
    z.array(BaseCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
