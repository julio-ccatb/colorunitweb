import { z } from 'zod';
import { SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema';

export const SessionDeleteOneSchema = z.object({
  select: SessionSelectObjectSchema.optional(),
  where: SessionWhereUniqueInputObjectSchema,
});
