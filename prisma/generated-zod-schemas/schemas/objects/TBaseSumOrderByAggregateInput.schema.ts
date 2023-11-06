import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    peso1: z.lazy(() => SortOrderSchema).optional(),
    peso2: z.lazy(() => SortOrderSchema).optional(),
    peso3: z.lazy(() => SortOrderSchema).optional(),
    peso4: z.lazy(() => SortOrderSchema).optional(),
    peso5: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TBaseSumOrderByAggregateInputObjectSchema = Schema;
