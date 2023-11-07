import { z } from 'zod';
import { TBaseSelectObjectSchema } from './TBaseSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseArgs> = z
  .object({
    select: z.lazy(() => TBaseSelectObjectSchema).optional(),
  })
  .strict();

export const TBaseArgsObjectSchema = Schema;
