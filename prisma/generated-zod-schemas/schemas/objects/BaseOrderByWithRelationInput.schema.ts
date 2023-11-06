import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TBaseOrderByWithRelationInputObjectSchema } from './TBaseOrderByWithRelationInput.schema';
import { RegColBasesOrderByRelationAggregateInputObjectSchema } from './RegColBasesOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    reforiginal: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    tbaseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    slang: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    tbase: z.lazy(() => TBaseOrderByWithRelationInputObjectSchema).optional(),
    regColBases: z
      .lazy(() => RegColBasesOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BaseOrderByWithRelationInputObjectSchema = Schema;
