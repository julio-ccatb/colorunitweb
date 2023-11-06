import { z } from 'zod';
import { AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountDeleteOneSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  where: AccountWhereUniqueInputObjectSchema,
});
