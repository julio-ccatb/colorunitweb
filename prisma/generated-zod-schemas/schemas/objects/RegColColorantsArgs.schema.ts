import { z } from 'zod';
import { RegColColorantsSelectObjectSchema } from './RegColColorantsSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsArgs> = z
  .object({
    select: z.lazy(() => RegColColorantsSelectObjectSchema).optional(),
  })
  .strict();

export const RegColColorantsArgsObjectSchema = Schema;
