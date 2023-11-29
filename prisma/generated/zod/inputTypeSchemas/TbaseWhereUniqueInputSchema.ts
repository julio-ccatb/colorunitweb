import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BaseListRelationFilterSchema } from './BaseListRelationFilterSchema';
import { RegcolListRelationFilterSchema } from './RegcolListRelationFilterSchema';

export const TbaseWhereUniqueInputSchema: z.ZodType<Prisma.TbaseWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    shortcode: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    shortcode: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  shortcode: z.string().optional(),
  AND: z.union([ z.lazy(() => TbaseWhereInputSchema),z.lazy(() => TbaseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TbaseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TbaseWhereInputSchema),z.lazy(() => TbaseWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  peso1: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  peso2: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  peso3: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  peso4: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  peso5: z.union([ z.lazy(() => DecimalNullableFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  base: z.lazy(() => BaseListRelationFilterSchema).optional(),
  regcol: z.lazy(() => RegcolListRelationFilterSchema).optional()
}).strict());

export default TbaseWhereUniqueInputSchema;
