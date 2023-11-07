import { z } from 'zod';
import { AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountUpdateInputObjectSchema } from './objects/AccountUpdateInput.schema';
import { AccountUncheckedUpdateInputObjectSchema } from './objects/AccountUncheckedUpdateInput.schema';
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountUpdateOneSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  data: z.union([
    AccountUpdateInputObjectSchema,
    AccountUncheckedUpdateInputObjectSchema,
  ]),
  where: AccountWhereUniqueInputObjectSchema,
});
