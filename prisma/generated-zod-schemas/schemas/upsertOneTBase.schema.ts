import { z } from 'zod';
import { TBaseSelectObjectSchema } from './objects/TBaseSelect.schema';
import { TBaseWhereUniqueInputObjectSchema } from './objects/TBaseWhereUniqueInput.schema';
import { TBaseCreateInputObjectSchema } from './objects/TBaseCreateInput.schema';
import { TBaseUncheckedCreateInputObjectSchema } from './objects/TBaseUncheckedCreateInput.schema';
import { TBaseUpdateInputObjectSchema } from './objects/TBaseUpdateInput.schema';
import { TBaseUncheckedUpdateInputObjectSchema } from './objects/TBaseUncheckedUpdateInput.schema';

export const TBaseUpsertSchema = z.object({
  select: TBaseSelectObjectSchema.optional(),
  where: TBaseWhereUniqueInputObjectSchema,
  create: z.union([
    TBaseCreateInputObjectSchema,
    TBaseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TBaseUpdateInputObjectSchema,
    TBaseUncheckedUpdateInputObjectSchema,
  ]),
});
