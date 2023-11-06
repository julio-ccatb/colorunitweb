import { z } from 'zod';
import { RegColBasesSelectObjectSchema } from './objects/RegColBasesSelect.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './objects/RegColBasesWhereUniqueInput.schema';
import { RegColBasesCreateInputObjectSchema } from './objects/RegColBasesCreateInput.schema';
import { RegColBasesUncheckedCreateInputObjectSchema } from './objects/RegColBasesUncheckedCreateInput.schema';
import { RegColBasesUpdateInputObjectSchema } from './objects/RegColBasesUpdateInput.schema';
import { RegColBasesUncheckedUpdateInputObjectSchema } from './objects/RegColBasesUncheckedUpdateInput.schema';

export const RegColBasesUpsertSchema = z.object({
  select: RegColBasesSelectObjectSchema.optional(),
  where: RegColBasesWhereUniqueInputObjectSchema,
  create: z.union([
    RegColBasesCreateInputObjectSchema,
    RegColBasesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RegColBasesUpdateInputObjectSchema,
    RegColBasesUncheckedUpdateInputObjectSchema,
  ]),
});
