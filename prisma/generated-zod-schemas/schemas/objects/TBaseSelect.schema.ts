import { z } from 'zod';
import { BaseFindManySchema } from '../findManyBase.schema';
import { TBaseCountOutputTypeArgsObjectSchema } from './TBaseCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseSelect> = z
  .object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    shortcode: z.boolean().optional(),
    peso1: z.boolean().optional(),
    peso2: z.boolean().optional(),
    peso3: z.boolean().optional(),
    peso4: z.boolean().optional(),
    peso5: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    bases: z.union([z.boolean(), z.lazy(() => BaseFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TBaseCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TBaseSelectObjectSchema = Schema;
