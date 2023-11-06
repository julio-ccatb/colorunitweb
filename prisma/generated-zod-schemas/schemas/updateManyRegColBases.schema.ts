import { z } from 'zod';
import { RegColBasesUpdateManyMutationInputObjectSchema } from './objects/RegColBasesUpdateManyMutationInput.schema';
import { RegColBasesWhereInputObjectSchema } from './objects/RegColBasesWhereInput.schema';

export const RegColBasesUpdateManySchema = z.object({
  data: RegColBasesUpdateManyMutationInputObjectSchema,
  where: RegColBasesWhereInputObjectSchema.optional(),
});
