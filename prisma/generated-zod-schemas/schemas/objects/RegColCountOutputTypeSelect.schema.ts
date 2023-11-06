import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCountOutputTypeSelect> = z
  .object({
    regColBases: z.boolean().optional(),
    regColColorants: z.boolean().optional(),
  })
  .strict();

export const RegColCountOutputTypeSelectObjectSchema = Schema;
