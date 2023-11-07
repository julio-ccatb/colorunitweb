import { z } from 'zod';
import { RegColColorantsSelectObjectSchema } from './objects/RegColColorantsSelect.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './objects/RegColColorantsWhereUniqueInput.schema';

export const RegColColorantsFindUniqueSchema = z.object({
  select: RegColColorantsSelectObjectSchema.optional(),
  where: RegColColorantsWhereUniqueInputObjectSchema,
});
