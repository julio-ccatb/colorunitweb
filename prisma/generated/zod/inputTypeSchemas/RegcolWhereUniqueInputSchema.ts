import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { TbaseNullableRelationFilterSchema } from './TbaseNullableRelationFilterSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { RegcolbasesListRelationFilterSchema } from './RegcolbasesListRelationFilterSchema';
import { RegcolcolorantsListRelationFilterSchema } from './RegcolcolorantsListRelationFilterSchema';

export const RegcolWhereUniqueInputSchema: z.ZodType<Prisma.RegcolWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => RegcolWhereInputSchema),z.lazy(() => RegcolWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolWhereInputSchema),z.lazy(() => RegcolWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  carta: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  R: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  G: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  B: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  pesopromedio: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  brillo: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  active: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  coeficienteG: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tbaseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  process: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  tbase: z.union([ z.lazy(() => TbaseNullableRelationFilterSchema),z.lazy(() => TbaseWhereInputSchema) ]).optional().nullable(),
  regcolbases: z.lazy(() => RegcolbasesListRelationFilterSchema).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsListRelationFilterSchema).optional()
}).strict());

export default RegcolWhereUniqueInputSchema;
