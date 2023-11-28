import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereInputSchema } from './BaseWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TbaseRelationFilterSchema } from './TbaseRelationFilterSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { RegcolbasesListRelationFilterSchema } from './RegcolbasesListRelationFilterSchema';

export const BaseWhereUniqueInputSchema: z.ZodType<Prisma.BaseWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => BaseWhereInputSchema),z.lazy(() => BaseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BaseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BaseWhereInputSchema),z.lazy(() => BaseWhereInputSchema).array() ]).optional(),
  reforiginal: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tbaseId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  slang: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tbase: z.union([ z.lazy(() => TbaseRelationFilterSchema),z.lazy(() => TbaseWhereInputSchema) ]).optional(),
  regcolbases: z.lazy(() => RegcolbasesListRelationFilterSchema).optional()
}).strict());

export default BaseWhereUniqueInputSchema;
