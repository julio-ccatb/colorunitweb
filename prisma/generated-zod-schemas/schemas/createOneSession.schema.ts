import { z } from 'zod';
import { SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema';
import { SessionUncheckedCreateInputObjectSchema } from './objects/SessionUncheckedCreateInput.schema';

export const SessionCreateOneSchema = z.object({
  select: SessionSelectObjectSchema.optional(),
  data: z.union([
    SessionCreateInputObjectSchema,
    SessionUncheckedCreateInputObjectSchema,
  ]),
});
