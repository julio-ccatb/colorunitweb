import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { RegcolbasesWhereInputSchema } from './RegcolbasesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BaseRelationFilterSchema } from './BaseRelationFilterSchema';
import { BaseWhereInputSchema } from './BaseWhereInputSchema';
import { RegcolRelationFilterSchema } from './RegcolRelationFilterSchema';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';

export const RegcolbasesWhereUniqueInputSchema: z.ZodType<Prisma.RegcolbasesWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => RegcolbasesWhereInputSchema),z.lazy(() => RegcolbasesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolbasesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolbasesWhereInputSchema),z.lazy(() => RegcolbasesWhereInputSchema).array() ]).optional(),
  regColId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  baseId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  amount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  base: z.union([ z.lazy(() => BaseRelationFilterSchema),z.lazy(() => BaseWhereInputSchema) ]).optional(),
  regcol: z.union([ z.lazy(() => RegcolRelationFilterSchema),z.lazy(() => RegcolWhereInputSchema) ]).optional(),
}).strict());

export default RegcolbasesWhereUniqueInputSchema;
