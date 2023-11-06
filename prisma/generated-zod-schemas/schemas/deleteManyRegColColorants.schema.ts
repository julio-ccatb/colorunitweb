import { z } from 'zod';
import { RegColColorantsWhereInputObjectSchema } from './objects/RegColColorantsWhereInput.schema';

export const RegColColorantsDeleteManySchema = z.object({
  where: RegColColorantsWhereInputObjectSchema.optional(),
});
