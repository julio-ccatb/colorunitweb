import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    regColId: z.lazy(() => SortOrderSchema).optional(),
    colorantId: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RegColColorantsSumOrderByAggregateInputObjectSchema = Schema;
