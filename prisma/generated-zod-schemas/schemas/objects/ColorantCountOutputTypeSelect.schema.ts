import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCountOutputTypeSelect> = z
  .object({
    regColColorants: z.boolean().optional(),
  })
  .strict();

export const ColorantCountOutputTypeSelectObjectSchema = Schema;
