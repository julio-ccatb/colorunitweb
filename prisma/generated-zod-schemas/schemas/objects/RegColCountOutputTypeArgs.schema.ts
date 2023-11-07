import { z } from 'zod';
import { RegColCountOutputTypeSelectObjectSchema } from './RegColCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => RegColCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const RegColCountOutputTypeArgsObjectSchema = Schema;
