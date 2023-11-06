import { z } from 'zod';
import { AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountCreateInputObjectSchema } from './objects/AccountCreateInput.schema';
import { AccountUncheckedCreateInputObjectSchema } from './objects/AccountUncheckedCreateInput.schema';

export const AccountCreateOneSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  data: z.union([
    AccountCreateInputObjectSchema,
    AccountUncheckedCreateInputObjectSchema,
  ]),
});
