import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegColBasesCountOrderByAggregateInputObjectSchema } from './RegColBasesCountOrderByAggregateInput.schema';
import { RegColBasesAvgOrderByAggregateInputObjectSchema } from './RegColBasesAvgOrderByAggregateInput.schema';
import { RegColBasesMaxOrderByAggregateInputObjectSchema } from './RegColBasesMaxOrderByAggregateInput.schema';
import { RegColBasesMinOrderByAggregateInputObjectSchema } from './RegColBasesMinOrderByAggregateInput.schema';
import { RegColBasesSumOrderByAggregateInputObjectSchema } from './RegColBasesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    regColId: z.lazy(() => SortOrderSchema).optional(),
    baseId: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RegColBasesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RegColBasesAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RegColBasesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RegColBasesMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RegColBasesSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RegColBasesOrderByWithAggregationInputObjectSchema = Schema;
