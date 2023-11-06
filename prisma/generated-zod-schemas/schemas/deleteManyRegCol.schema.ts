import { z } from 'zod';
import { RegColWhereInputObjectSchema } from './objects/RegColWhereInput.schema';

export const RegColDeleteManySchema = z.object({
  where: RegColWhereInputObjectSchema.optional(),
});
