import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RegcolScalarWhereInputSchema: z.ZodType<Prisma.RegcolScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RegcolScalarWhereInputSchema),z.lazy(() => RegcolScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RegcolScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RegcolScalarWhereInputSchema),z.lazy(() => RegcolScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  carta: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  R: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  G: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  B: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tbaseId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  process: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  pesopromedio: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  brillo: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  active: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  coeficienteG: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RegcolScalarWhereInputSchema;
