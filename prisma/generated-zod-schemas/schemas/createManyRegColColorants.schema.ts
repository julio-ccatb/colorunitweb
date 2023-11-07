import { z } from 'zod';
import { RegColColorantsCreateManyInputObjectSchema } from './objects/RegColColorantsCreateManyInput.schema';

export const RegColColorantsCreateManySchema = z.object({
  data: z.union([
    RegColColorantsCreateManyInputObjectSchema,
    z.array(RegColColorantsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
