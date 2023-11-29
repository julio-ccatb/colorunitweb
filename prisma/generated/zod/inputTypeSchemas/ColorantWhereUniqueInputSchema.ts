import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { ColorantWhereInputSchema } from './ColorantWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { RegcolcolorantsListRelationFilterSchema } from './RegcolcolorantsListRelationFilterSchema';

export const ColorantWhereUniqueInputSchema: z.ZodType<Prisma.ColorantWhereUniqueInput> = z.union([
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
  AND: z.union([ z.lazy(() => ColorantWhereInputSchema),z.lazy(() => ColorantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorantWhereInputSchema),z.lazy(() => ColorantWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gramUP: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  gramUG: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsListRelationFilterSchema).optional()
}).strict());

export default ColorantWhereUniqueInputSchema;
