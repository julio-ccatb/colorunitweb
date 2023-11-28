import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { ColorantRelationFilterSchema } from './ColorantRelationFilterSchema';
import { ColorantWhereInputSchema } from './ColorantWhereInputSchema';
import { RegcolRelationFilterSchema } from './RegcolRelationFilterSchema';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';

export const RegcolcolorantsWhereInputSchema: z.ZodType<Prisma.RegcolcolorantsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegcolcolorantsWhereInputSchema),z.lazy(() => RegcolcolorantsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolcolorantsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolcolorantsWhereInputSchema),z.lazy(() => RegcolcolorantsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  regColId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  colorantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  colorant: z.union([ z.lazy(() => ColorantRelationFilterSchema),z.lazy(() => ColorantWhereInputSchema) ]).optional(),
  regcol: z.union([ z.lazy(() => RegcolRelationFilterSchema),z.lazy(() => RegcolWhereInputSchema) ]).optional(),
}).strict();

export default RegcolcolorantsWhereInputSchema;
