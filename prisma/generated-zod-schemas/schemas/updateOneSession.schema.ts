import { z } from 'zod';
import { SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionUpdateInputObjectSchema } from './objects/SessionUpdateInput.schema';
import { SessionUncheckedUpdateInputObjectSchema } from './objects/SessionUncheckedUpdateInput.schema';
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema';

export const SessionUpdateOneSchema = z.object({
  select: SessionSelectObjectSchema.optional(),
  data: z.union([
    SessionUpdateInputObjectSchema,
    SessionUncheckedUpdateInputObjectSchema,
  ]),
  where: SessionWhereUniqueInputObjectSchema,
});
