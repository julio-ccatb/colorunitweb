import { z } from 'zod';
import { TBaseSelectObjectSchema } from './objects/TBaseSelect.schema';
import { TBaseCreateInputObjectSchema } from './objects/TBaseCreateInput.schema';
import { TBaseUncheckedCreateInputObjectSchema } from './objects/TBaseUncheckedCreateInput.schema';

export const TBaseCreateOneSchema = z.object({
  select: TBaseSelectObjectSchema.optional(),
  data: z.union([
    TBaseCreateInputObjectSchema,
    TBaseUncheckedCreateInputObjectSchema,
  ]),
});
