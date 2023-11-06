import { z } from 'zod';
import { ColorantSelectObjectSchema } from './ColorantSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantArgs> = z
  .object({
    select: z.lazy(() => ColorantSelectObjectSchema).optional(),
  })
  .strict();

export const ColorantArgsObjectSchema = Schema;
