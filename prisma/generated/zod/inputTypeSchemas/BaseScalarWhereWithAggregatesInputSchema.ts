import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BaseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BaseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BaseScalarWhereWithAggregatesInputSchema),z.lazy(() => BaseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BaseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BaseScalarWhereWithAggregatesInputSchema),z.lazy(() => BaseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  reforiginal: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tbaseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  slang: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default BaseScalarWhereWithAggregatesInputSchema;
