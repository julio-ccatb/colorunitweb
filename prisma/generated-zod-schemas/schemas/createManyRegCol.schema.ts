import { z } from 'zod';
import { RegColCreateManyInputObjectSchema } from './objects/RegColCreateManyInput.schema';

export const RegColCreateManySchema = z.object({
  data: z.union([
    RegColCreateManyInputObjectSchema,
    z.array(RegColCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
