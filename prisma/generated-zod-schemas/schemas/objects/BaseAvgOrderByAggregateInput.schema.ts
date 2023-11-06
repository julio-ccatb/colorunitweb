import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tbaseId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BaseAvgOrderByAggregateInputObjectSchema = Schema;
