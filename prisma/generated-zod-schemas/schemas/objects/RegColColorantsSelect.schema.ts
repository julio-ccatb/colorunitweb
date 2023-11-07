import { z } from 'zod';
import { ColorantArgsObjectSchema } from './ColorantArgs.schema';
import { RegColArgsObjectSchema } from './RegColArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsSelect> = z
  .object({
    id: z.boolean().optional(),
    regColId: z.boolean().optional(),
    colorantId: z.boolean().optional(),
    amount: z.boolean().optional(),
    colorant: z
      .union([z.boolean(), z.lazy(() => ColorantArgsObjectSchema)])
      .optional(),
    regCol: z
      .union([z.boolean(), z.lazy(() => RegColArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RegColColorantsSelectObjectSchema = Schema;
