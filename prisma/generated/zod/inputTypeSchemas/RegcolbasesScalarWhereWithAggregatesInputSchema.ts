import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const RegcolbasesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RegcolbasesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RegcolbasesScalarWhereWithAggregatesInputSchema),z.lazy(() => RegcolbasesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolbasesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolbasesScalarWhereWithAggregatesInputSchema),z.lazy(() => RegcolbasesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  regColId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  baseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default RegcolbasesScalarWhereWithAggregatesInputSchema;
