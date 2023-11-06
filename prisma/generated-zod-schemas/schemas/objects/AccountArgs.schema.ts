import { z } from 'zod';
import { AccountSelectObjectSchema } from './AccountSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountArgs> = z
  .object({
    select: z.lazy(() => AccountSelectObjectSchema).optional(),
  })
  .strict();

export const AccountArgsObjectSchema = Schema;
