import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BaseScalarWhereInputSchema: z.ZodType<Prisma.BaseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BaseScalarWhereInputSchema),z.lazy(() => BaseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BaseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BaseScalarWhereInputSchema),z.lazy(() => BaseScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reforiginal: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tbaseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  slang: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default BaseScalarWhereInputSchema;
