import { z } from 'zod';
import { TBaseSelectObjectSchema } from './objects/TBaseSelect.schema';
import { TBaseUpdateInputObjectSchema } from './objects/TBaseUpdateInput.schema';
import { TBaseUncheckedUpdateInputObjectSchema } from './objects/TBaseUncheckedUpdateInput.schema';
import { TBaseWhereUniqueInputObjectSchema } from './objects/TBaseWhereUniqueInput.schema';

export const TBaseUpdateOneSchema = z.object({
  select: TBaseSelectObjectSchema.optional(),
  data: z.union([
    TBaseUpdateInputObjectSchema,
    TBaseUncheckedUpdateInputObjectSchema,
  ]),
  where: TBaseWhereUniqueInputObjectSchema,
});
