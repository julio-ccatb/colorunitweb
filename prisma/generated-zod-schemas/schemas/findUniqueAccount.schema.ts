import { z } from 'zod';
import { AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';

export const AccountFindUniqueSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  where: AccountWhereUniqueInputObjectSchema,
});
