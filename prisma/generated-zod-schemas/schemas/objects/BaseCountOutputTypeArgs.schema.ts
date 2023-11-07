import { z } from 'zod';
import { BaseCountOutputTypeSelectObjectSchema } from './BaseCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => BaseCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const BaseCountOutputTypeArgsObjectSchema = Schema;
