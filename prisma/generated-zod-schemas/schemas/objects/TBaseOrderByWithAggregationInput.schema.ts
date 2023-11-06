import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TBaseCountOrderByAggregateInputObjectSchema } from './TBaseCountOrderByAggregateInput.schema';
import { TBaseAvgOrderByAggregateInputObjectSchema } from './TBaseAvgOrderByAggregateInput.schema';
import { TBaseMaxOrderByAggregateInputObjectSchema } from './TBaseMaxOrderByAggregateInput.schema';
import { TBaseMinOrderByAggregateInputObjectSchema } from './TBaseMinOrderByAggregateInput.schema';
import { TBaseSumOrderByAggregateInputObjectSchema } from './TBaseSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    shortcode: z.lazy(() => SortOrderSchema).optional(),
    peso1: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    peso2: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    peso3: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    peso4: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    peso5: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TBaseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => TBaseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TBaseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TBaseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TBaseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TBaseOrderByWithAggregationInputObjectSchema = Schema;
