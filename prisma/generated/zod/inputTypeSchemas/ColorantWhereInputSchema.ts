import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { RegcolcolorantsListRelationFilterSchema } from './RegcolcolorantsListRelationFilterSchema';

export const ColorantWhereInputSchema: z.ZodType<Prisma.ColorantWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColorantWhereInputSchema),z.lazy(() => ColorantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorantWhereInputSchema),z.lazy(() => ColorantWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shortcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gramUP: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  gramUG: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsListRelationFilterSchema).optional()
}).strict();

export default ColorantWhereInputSchema;
