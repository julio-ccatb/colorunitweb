import { z } from 'zod';
import { ColorantCountOutputTypeSelectObjectSchema } from './ColorantCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ColorantCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ColorantCountOutputTypeArgsObjectSchema = Schema;
