import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RegcolcolorantsCreateNestedManyWithoutColorantInputSchema } from './RegcolcolorantsCreateNestedManyWithoutColorantInputSchema';

export const ColorantCreateInputSchema: z.ZodType<Prisma.ColorantCreateInput> = z.object({
  description: z.string(),
  shortcode: z.string(),
  gramUP: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  gramUG: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  active: z.boolean().optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsCreateNestedManyWithoutColorantInputSchema).optional()
}).strict();

export default ColorantCreateInputSchema;
