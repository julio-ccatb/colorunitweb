import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TbaseRelationFilterSchema } from './TbaseRelationFilterSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { RegcolbasesListRelationFilterSchema } from './RegcolbasesListRelationFilterSchema';

export const BaseWhereInputSchema: z.ZodType<Prisma.BaseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BaseWhereInputSchema),z.lazy(() => BaseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BaseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BaseWhereInputSchema),z.lazy(() => BaseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reforiginal: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tbaseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  slang: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tbase: z.union([ z.lazy(() => TbaseRelationFilterSchema),z.lazy(() => TbaseWhereInputSchema) ]).optional(),
  regcolbases: z.lazy(() => RegcolbasesListRelationFilterSchema).optional()
}).strict();

export default BaseWhereInputSchema;
