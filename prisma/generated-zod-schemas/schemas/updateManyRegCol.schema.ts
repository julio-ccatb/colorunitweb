import { z } from 'zod';
import { RegColUpdateManyMutationInputObjectSchema } from './objects/RegColUpdateManyMutationInput.schema';
import { RegColWhereInputObjectSchema } from './objects/RegColWhereInput.schema';

export const RegColUpdateManySchema = z.object({
  data: RegColUpdateManyMutationInputObjectSchema,
  where: RegColWhereInputObjectSchema.optional(),
});
