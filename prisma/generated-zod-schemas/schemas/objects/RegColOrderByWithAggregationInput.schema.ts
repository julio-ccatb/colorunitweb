import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegColCountOrderByAggregateInputObjectSchema } from './RegColCountOrderByAggregateInput.schema';
import { RegColAvgOrderByAggregateInputObjectSchema } from './RegColAvgOrderByAggregateInput.schema';
import { RegColMaxOrderByAggregateInputObjectSchema } from './RegColMaxOrderByAggregateInput.schema';
import { RegColMinOrderByAggregateInputObjectSchema } from './RegColMinOrderByAggregateInput.schema';
import { RegColSumOrderByAggregateInputObjectSchema } from './RegColSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => RegColCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => RegColAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RegColMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RegColMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RegColSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RegColOrderByWithAggregationInputObjectSchema = Schema;
