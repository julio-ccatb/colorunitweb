import { z } from 'zod';
import { RegColSelectObjectSchema } from './objects/RegColSelect.schema';
import { RegColUpdateInputObjectSchema } from './objects/RegColUpdateInput.schema';
import { RegColUncheckedUpdateInputObjectSchema } from './objects/RegColUncheckedUpdateInput.schema';
import { RegColWhereUniqueInputObjectSchema } from './objects/RegColWhereUniqueInput.schema';

export const RegColUpdateOneSchema = z.object({
  select: RegColSelectObjectSchema.optional(),
  data: z.union([
    RegColUpdateInputObjectSchema,
    RegColUncheckedUpdateInputObjectSchema,
  ]),
  where: RegColWhereUniqueInputObjectSchema,
});
