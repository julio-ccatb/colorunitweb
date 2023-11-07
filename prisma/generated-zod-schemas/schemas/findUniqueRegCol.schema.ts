import { z } from 'zod';
import { RegColSelectObjectSchema } from './objects/RegColSelect.schema';
import { RegColWhereUniqueInputObjectSchema } from './objects/RegColWhereUniqueInput.schema';

export const RegColFindUniqueSchema = z.object({
  select: RegColSelectObjectSchema.optional(),
  where: RegColWhereUniqueInputObjectSchema,
});
