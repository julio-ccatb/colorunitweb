import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RegColColorantsCountOrderByAggregateInputObjectSchema } from './RegColColorantsCountOrderByAggregateInput.schema';
import { RegColColorantsAvgOrderByAggregateInputObjectSchema } from './RegColColorantsAvgOrderByAggregateInput.schema';
import { RegColColorantsMaxOrderByAggregateInputObjectSchema } from './RegColColorantsMaxOrderByAggregateInput.schema';
import { RegColColorantsMinOrderByAggregateInputObjectSchema } from './RegColColorantsMinOrderByAggregateInput.schema';
import { RegColColorantsSumOrderByAggregateInputObjectSchema } from './RegColColorantsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    regColId: z.lazy(() => SortOrderSchema).optional(),
    colorantId: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RegColColorantsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RegColColorantsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RegColColorantsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RegColColorantsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RegColColorantsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RegColColorantsOrderByWithAggregationInputObjectSchema = Schema;
