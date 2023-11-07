import { z } from 'zod';
import { RegColBasesWhereInputObjectSchema } from './objects/RegColBasesWhereInput.schema';

export const RegColBasesDeleteManySchema = z.object({
  where: RegColBasesWhereInputObjectSchema.optional(),
});
