import { z } from 'zod';
import { BaseUpdateManyMutationInputObjectSchema } from './objects/BaseUpdateManyMutationInput.schema';
import { BaseWhereInputObjectSchema } from './objects/BaseWhereInput.schema';

export const BaseUpdateManySchema = z.object({
  data: BaseUpdateManyMutationInputObjectSchema,
  where: BaseWhereInputObjectSchema.optional(),
});
