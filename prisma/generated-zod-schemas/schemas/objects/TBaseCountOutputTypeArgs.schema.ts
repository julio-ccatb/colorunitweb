import { z } from 'zod';
import { TBaseCountOutputTypeSelectObjectSchema } from './TBaseCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => TBaseCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const TBaseCountOutputTypeArgsObjectSchema = Schema;
