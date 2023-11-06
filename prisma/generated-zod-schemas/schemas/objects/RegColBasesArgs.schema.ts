import { z } from 'zod';
import { RegColBasesSelectObjectSchema } from './RegColBasesSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesArgs> = z
  .object({
    select: z.lazy(() => RegColBasesSelectObjectSchema).optional(),
  })
  .strict();

export const RegColBasesArgsObjectSchema = Schema;
