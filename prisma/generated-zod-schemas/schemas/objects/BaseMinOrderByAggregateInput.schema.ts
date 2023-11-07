import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    reforiginal: z.lazy(() => SortOrderSchema).optional(),
    tbaseId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    slang: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BaseMinOrderByAggregateInputObjectSchema = Schema;
