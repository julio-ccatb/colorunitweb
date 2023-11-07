import { z } from 'zod';
import { RegColColorantsSelectObjectSchema } from './objects/RegColColorantsSelect.schema';
import { RegColColorantsCreateInputObjectSchema } from './objects/RegColColorantsCreateInput.schema';
import { RegColColorantsUncheckedCreateInputObjectSchema } from './objects/RegColColorantsUncheckedCreateInput.schema';

export const RegColColorantsCreateOneSchema = z.object({
  select: RegColColorantsSelectObjectSchema.optional(),
  data: z.union([
    RegColColorantsCreateInputObjectSchema,
    RegColColorantsUncheckedCreateInputObjectSchema,
  ]),
});
