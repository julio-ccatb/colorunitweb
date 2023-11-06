import { z } from 'zod';
import { TBaseArgsObjectSchema } from './TBaseArgs.schema';
import { RegColBasesFindManySchema } from '../findManyRegColBases.schema';
import { BaseCountOutputTypeArgsObjectSchema } from './BaseCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseSelect> = z
  .object({
    id: z.boolean().optional(),
    reforiginal: z.boolean().optional(),
    tbaseId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    slang: z.boolean().optional(),
    tbase: z
      .union([z.boolean(), z.lazy(() => TBaseArgsObjectSchema)])
      .optional(),
    regColBases: z
      .union([z.boolean(), z.lazy(() => RegColBasesFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => BaseCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const BaseSelectObjectSchema = Schema;
