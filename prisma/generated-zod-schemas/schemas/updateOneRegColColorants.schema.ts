import { z } from 'zod';
import { RegColColorantsSelectObjectSchema } from './objects/RegColColorantsSelect.schema';
import { RegColColorantsUpdateInputObjectSchema } from './objects/RegColColorantsUpdateInput.schema';
import { RegColColorantsUncheckedUpdateInputObjectSchema } from './objects/RegColColorantsUncheckedUpdateInput.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './objects/RegColColorantsWhereUniqueInput.schema';

export const RegColColorantsUpdateOneSchema = z.object({
  select: RegColColorantsSelectObjectSchema.optional(),
  data: z.union([
    RegColColorantsUpdateInputObjectSchema,
    RegColColorantsUncheckedUpdateInputObjectSchema,
  ]),
  where: RegColColorantsWhereUniqueInputObjectSchema,
});
