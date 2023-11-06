import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCountOutputTypeSelect> = z
  .object({
    regColBases: z.boolean().optional(),
  })
  .strict();

export const BaseCountOutputTypeSelectObjectSchema = Schema;
