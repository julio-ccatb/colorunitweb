import { z } from 'zod';
import { RegColBasesSelectObjectSchema } from './objects/RegColBasesSelect.schema';
import { RegColBasesWhereUniqueInputObjectSchema } from './objects/RegColBasesWhereUniqueInput.schema';

export const RegColBasesDeleteOneSchema = z.object({
  select: RegColBasesSelectObjectSchema.optional(),
  where: RegColBasesWhereUniqueInputObjectSchema,
});
