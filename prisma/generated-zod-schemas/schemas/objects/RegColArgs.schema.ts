import { z } from 'zod';
import { RegColSelectObjectSchema } from './RegColSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColArgs> = z
  .object({
    select: z.lazy(() => RegColSelectObjectSchema).optional(),
  })
  .strict();

export const RegColArgsObjectSchema = Schema;
