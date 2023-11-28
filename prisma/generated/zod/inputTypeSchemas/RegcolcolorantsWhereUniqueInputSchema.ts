import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { RegcolcolorantsWhereInputSchema } from './RegcolcolorantsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { ColorantRelationFilterSchema } from './ColorantRelationFilterSchema';
import { ColorantWhereInputSchema } from './ColorantWhereInputSchema';
import { RegcolRelationFilterSchema } from './RegcolRelationFilterSchema';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';

export const RegcolcolorantsWhereUniqueInputSchema: z.ZodType<Prisma.RegcolcolorantsWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => RegcolcolorantsWhereInputSchema),z.lazy(() => RegcolcolorantsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolcolorantsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolcolorantsWhereInputSchema),z.lazy(() => RegcolcolorantsWhereInputSchema).array() ]).optional(),
  regColId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  colorantId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  colorant: z.union([ z.lazy(() => ColorantRelationFilterSchema),z.lazy(() => ColorantWhereInputSchema) ]).optional(),
  regcol: z.union([ z.lazy(() => RegcolRelationFilterSchema),z.lazy(() => RegcolWhereInputSchema) ]).optional(),
}).strict());

export default RegcolcolorantsWhereUniqueInputSchema;
