import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BaseOrderByWithRelationInputObjectSchema } from './BaseOrderByWithRelationInput.schema';
import { RegColOrderByWithRelationInputObjectSchema } from './RegColOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    regColId: z.lazy(() => SortOrderSchema).optional(),
    baseId: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    base: z.lazy(() => BaseOrderByWithRelationInputObjectSchema).optional(),
    regCol: z.lazy(() => RegColOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const RegColBasesOrderByWithRelationInputObjectSchema = Schema;
