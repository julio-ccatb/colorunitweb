import { z } from 'zod';
import { BaseWhereInputObjectSchema } from './objects/BaseWhereInput.schema';

export const BaseDeleteManySchema = z.object({
  where: BaseWhereInputObjectSchema.optional(),
});
