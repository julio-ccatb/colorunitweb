import { z } from 'zod';
import { RegColBasesFindManySchema } from '../findManyRegColBases.schema';
import { RegColColorantsFindManySchema } from '../findManyRegColColorants.schema';
import { RegColCountOutputTypeArgsObjectSchema } from './RegColCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColSelect> = z
  .object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    carta: z.boolean().optional(),
    R: z.boolean().optional(),
    G: z.boolean().optional(),
    B: z.boolean().optional(),
    pesopromedio: z.boolean().optional(),
    brillo: z.boolean().optional(),
    active: z.boolean().optional(),
    coeficienteG: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    regColBases: z
      .union([z.boolean(), z.lazy(() => RegColBasesFindManySchema)])
      .optional(),
    regColColorants: z
      .union([z.boolean(), z.lazy(() => RegColColorantsFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RegColCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RegColSelectObjectSchema = Schema;
