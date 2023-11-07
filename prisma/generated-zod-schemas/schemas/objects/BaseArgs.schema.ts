import { z } from 'zod';
import { BaseSelectObjectSchema } from './BaseSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseArgs> = z
  .object({
    select: z.lazy(() => BaseSelectObjectSchema).optional(),
  })
  .strict();

export const BaseArgsObjectSchema = Schema;
