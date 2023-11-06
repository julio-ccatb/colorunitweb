import { z } from 'zod';
import { TBaseSelectObjectSchema } from './objects/TBaseSelect.schema';
import { TBaseWhereUniqueInputObjectSchema } from './objects/TBaseWhereUniqueInput.schema';

export const TBaseDeleteOneSchema = z.object({
  select: TBaseSelectObjectSchema.optional(),
  where: TBaseWhereUniqueInputObjectSchema,
});
