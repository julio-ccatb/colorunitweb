import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const RegcolcolorantsScalarWhereInputSchema: z.ZodType<Prisma.RegcolcolorantsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegcolcolorantsScalarWhereInputSchema),z.lazy(() => RegcolcolorantsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolcolorantsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolcolorantsScalarWhereInputSchema),z.lazy(() => RegcolcolorantsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  regColId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  colorantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
}).strict();

export default RegcolcolorantsScalarWhereInputSchema;
