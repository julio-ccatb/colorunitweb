import { z } from 'zod';
import { RegColSelectObjectSchema } from './objects/RegColSelect.schema';
import { RegColCreateInputObjectSchema } from './objects/RegColCreateInput.schema';
import { RegColUncheckedCreateInputObjectSchema } from './objects/RegColUncheckedCreateInput.schema';

export const RegColCreateOneSchema = z.object({
  select: RegColSelectObjectSchema.optional(),
  data: z.union([
    RegColCreateInputObjectSchema,
    RegColUncheckedCreateInputObjectSchema,
  ]),
});
