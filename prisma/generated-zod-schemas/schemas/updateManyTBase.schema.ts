import { z } from 'zod';
import { TBaseUpdateManyMutationInputObjectSchema } from './objects/TBaseUpdateManyMutationInput.schema';
import { TBaseWhereInputObjectSchema } from './objects/TBaseWhereInput.schema';

export const TBaseUpdateManySchema = z.object({
  data: TBaseUpdateManyMutationInputObjectSchema,
  where: TBaseWhereInputObjectSchema.optional(),
});
