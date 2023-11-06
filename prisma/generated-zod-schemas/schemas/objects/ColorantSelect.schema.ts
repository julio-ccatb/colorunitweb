import { z } from 'zod';
import { RegColColorantsFindManySchema } from '../findManyRegColColorants.schema';
import { ColorantCountOutputTypeArgsObjectSchema } from './ColorantCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantSelect> = z
  .object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    shortcode: z.boolean().optional(),
    basecodi: z.boolean().optional(),
    gramUP: z.boolean().optional(),
    gramUG: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    regColColorants: z
      .union([z.boolean(), z.lazy(() => RegColColorantsFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ColorantCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ColorantSelectObjectSchema = Schema;
