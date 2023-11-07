import { z } from 'zod';
import { BaseArgsObjectSchema } from './BaseArgs.schema';
import { RegColArgsObjectSchema } from './RegColArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesSelect> = z
  .object({
    id: z.boolean().optional(),
    regColId: z.boolean().optional(),
    baseId: z.boolean().optional(),
    amount: z.boolean().optional(),
    base: z.union([z.boolean(), z.lazy(() => BaseArgsObjectSchema)]).optional(),
    regCol: z
      .union([z.boolean(), z.lazy(() => RegColArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RegColBasesSelectObjectSchema = Schema;
