import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BaseCountOrderByAggregateInputObjectSchema } from './BaseCountOrderByAggregateInput.schema';
import { BaseAvgOrderByAggregateInputObjectSchema } from './BaseAvgOrderByAggregateInput.schema';
import { BaseMaxOrderByAggregateInputObjectSchema } from './BaseMaxOrderByAggregateInput.schema';
import { BaseMinOrderByAggregateInputObjectSchema } from './BaseMinOrderByAggregateInput.schema';
import { BaseSumOrderByAggregateInputObjectSchema } from './BaseSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseOrderByWithAggregationInput> = z
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
    _count: z.lazy(() => BaseCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => BaseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => BaseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BaseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => BaseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BaseOrderByWithAggregationInputObjectSchema = Schema;
