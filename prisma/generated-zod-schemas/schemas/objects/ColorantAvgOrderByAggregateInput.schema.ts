import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    basecodi: z.lazy(() => SortOrderSchema).optional(),
    gramUP: z.lazy(() => SortOrderSchema).optional(),
    gramUG: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ColorantAvgOrderByAggregateInputObjectSchema = Schema;
