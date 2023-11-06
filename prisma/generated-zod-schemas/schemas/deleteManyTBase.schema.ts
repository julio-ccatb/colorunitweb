import { z } from 'zod';
import { TBaseWhereInputObjectSchema } from './objects/TBaseWhereInput.schema';

export const TBaseDeleteManySchema = z.object({
  where: TBaseWhereInputObjectSchema.optional(),
});
