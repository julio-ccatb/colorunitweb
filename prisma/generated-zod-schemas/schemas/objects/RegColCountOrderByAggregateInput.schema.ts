import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    carta: z.lazy(() => SortOrderSchema).optional(),
    R: z.lazy(() => SortOrderSchema).optional(),
    G: z.lazy(() => SortOrderSchema).optional(),
    B: z.lazy(() => SortOrderSchema).optional(),
    pesopromedio: z.lazy(() => SortOrderSchema).optional(),
    brillo: z.lazy(() => SortOrderSchema).optional(),
    active: z.lazy(() => SortOrderSchema).optional(),
    coeficienteG: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RegColCountOrderByAggregateInputObjectSchema = Schema;
