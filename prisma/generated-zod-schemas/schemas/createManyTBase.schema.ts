import { z } from 'zod';
import { TBaseCreateManyInputObjectSchema } from './objects/TBaseCreateManyInput.schema';

export const TBaseCreateManySchema = z.object({
  data: z.union([
    TBaseCreateManyInputObjectSchema,
    z.array(TBaseCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
