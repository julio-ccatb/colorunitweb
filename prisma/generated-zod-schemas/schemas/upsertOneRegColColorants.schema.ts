import { z } from 'zod';
import { RegColColorantsSelectObjectSchema } from './objects/RegColColorantsSelect.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './objects/RegColColorantsWhereUniqueInput.schema';
import { RegColColorantsCreateInputObjectSchema } from './objects/RegColColorantsCreateInput.schema';
import { RegColColorantsUncheckedCreateInputObjectSchema } from './objects/RegColColorantsUncheckedCreateInput.schema';
import { RegColColorantsUpdateInputObjectSchema } from './objects/RegColColorantsUpdateInput.schema';
import { RegColColorantsUncheckedUpdateInputObjectSchema } from './objects/RegColColorantsUncheckedUpdateInput.schema';

export const RegColColorantsUpsertSchema = z.object({
  select: RegColColorantsSelectObjectSchema.optional(),
  where: RegColColorantsWhereUniqueInputObjectSchema,
  create: z.union([
    RegColColorantsCreateInputObjectSchema,
    RegColColorantsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RegColColorantsUpdateInputObjectSchema,
    RegColColorantsUncheckedUpdateInputObjectSchema,
  ]),
});
