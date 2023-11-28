import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RegcolbasesCreateNestedManyWithoutRegcolInputSchema } from './RegcolbasesCreateNestedManyWithoutRegcolInputSchema';
import { RegcolcolorantsCreateNestedManyWithoutRegcolInputSchema } from './RegcolcolorantsCreateNestedManyWithoutRegcolInputSchema';

export const RegcolCreateWithoutTbaseInputSchema: z.ZodType<Prisma.RegcolCreateWithoutTbaseInput> = z.object({
  description: z.string().optional().nullable(),
  carta: z.number().int().optional().nullable(),
  R: z.number().lte(255).nonnegative(),
  G: z.number().lte(255).nonnegative(),
  B: z.number().lte(255).nonnegative(),
  process: z.boolean().optional(),
  pesopromedio: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  brillo: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  active: z.boolean().optional().nullable(),
  coeficienteG: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  regcolbases: z.lazy(() => RegcolbasesCreateNestedManyWithoutRegcolInputSchema).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsCreateNestedManyWithoutRegcolInputSchema).optional()
}).strict();

export default RegcolCreateWithoutTbaseInputSchema;
