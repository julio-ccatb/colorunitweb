import { z } from 'zod';
import { RegColSelectObjectSchema } from './objects/RegColSelect.schema';
import { RegColWhereUniqueInputObjectSchema } from './objects/RegColWhereUniqueInput.schema';

export const RegColDeleteOneSchema = z.object({
  select: RegColSelectObjectSchema.optional(),
  where: RegColWhereUniqueInputObjectSchema,
});
