import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegColBasesOrderByRelationAggregateInputObjectSchema } from './RegColBasesOrderByRelationAggregateInput.schema';
import { RegColColorantsOrderByRelationAggregateInputObjectSchema } from './RegColColorantsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    carta: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    R: z.lazy(() => SortOrderSchema).optional(),
    G: z.lazy(() => SortOrderSchema).optional(),
    B: z.lazy(() => SortOrderSchema).optional(),
    pesopromedio: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    brillo: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    active: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    coeficienteG: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    regColBases: z
      .lazy(() => RegColBasesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    regColColorants: z
      .lazy(() => RegColColorantsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RegColOrderByWithRelationInputObjectSchema = Schema;
