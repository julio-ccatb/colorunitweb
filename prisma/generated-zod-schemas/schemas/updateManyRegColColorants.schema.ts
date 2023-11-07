import { z } from 'zod';
import { RegColColorantsUpdateManyMutationInputObjectSchema } from './objects/RegColColorantsUpdateManyMutationInput.schema';
import { RegColColorantsWhereInputObjectSchema } from './objects/RegColColorantsWhereInput.schema';

export const RegColColorantsUpdateManySchema = z.object({
  data: RegColColorantsUpdateManyMutationInputObjectSchema,
  where: RegColColorantsWhereInputObjectSchema.optional(),
});
