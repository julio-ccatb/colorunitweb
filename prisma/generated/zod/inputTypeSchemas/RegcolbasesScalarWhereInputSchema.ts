import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const RegcolbasesScalarWhereInputSchema: z.ZodType<Prisma.RegcolbasesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegcolbasesScalarWhereInputSchema),z.lazy(() => RegcolbasesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolbasesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolbasesScalarWhereInputSchema),z.lazy(() => RegcolbasesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  regColId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  baseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default RegcolbasesScalarWhereInputSchema;
