import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseCountOutputTypeSelect> = z
  .object({
    bases: z.boolean().optional(),
  })
  .strict();

export const TBaseCountOutputTypeSelectObjectSchema = Schema;
