import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const RegColBasesWhereUniqueInputObjectSchema = Schema;
