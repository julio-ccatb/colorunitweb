import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ColorantOrderByWithRelationInputObjectSchema } from './ColorantOrderByWithRelationInput.schema';
import { RegColOrderByWithRelationInputObjectSchema } from './RegColOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    regColId: z.lazy(() => SortOrderSchema).optional(),
    colorantId: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    colorant: z
      .lazy(() => ColorantOrderByWithRelationInputObjectSchema)
      .optional(),
    regCol: z.lazy(() => RegColOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const RegColColorantsOrderByWithRelationInputObjectSchema = Schema;
