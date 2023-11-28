import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const RegcolcolorantsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RegcolcolorantsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RegcolcolorantsScalarWhereWithAggregatesInputSchema),z.lazy(() => RegcolcolorantsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolcolorantsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolcolorantsScalarWhereWithAggregatesInputSchema),z.lazy(() => RegcolcolorantsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  regColId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  colorantId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default RegcolcolorantsScalarWhereWithAggregatesInputSchema;
