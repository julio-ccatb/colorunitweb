import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    carta: z.lazy(() => SortOrderSchema).optional(),
    R: z.lazy(() => SortOrderSchema).optional(),
    G: z.lazy(() => SortOrderSchema).optional(),
    B: z.lazy(() => SortOrderSchema).optional(),
    pesopromedio: z.lazy(() => SortOrderSchema).optional(),
    brillo: z.lazy(() => SortOrderSchema).optional(),
    coeficienteG: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RegColAvgOrderByAggregateInputObjectSchema = Schema;
