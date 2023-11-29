import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RegcolbasesUncheckedCreateNestedManyWithoutRegcolInputSchema } from './RegcolbasesUncheckedCreateNestedManyWithoutRegcolInputSchema';
import { RegcolcolorantsUncheckedCreateNestedManyWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedCreateNestedManyWithoutRegcolInputSchema';

export const RegcolUncheckedCreateInputSchema: z.ZodType<Prisma.RegcolUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  description: z.string().optional().nullable(),
  carta: z.number().int().optional().nullable(),
  R: z.number().int(),
  G: z.number().int(),
  B: z.number().int(),
  pesopromedio: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  brillo: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  active: z.boolean().optional().nullable(),
  coeficienteG: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tbaseId: z.number().int().optional().nullable(),
  process: z.boolean().optional(),
  regcolbases: z.lazy(() => RegcolbasesUncheckedCreateNestedManyWithoutRegcolInputSchema).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsUncheckedCreateNestedManyWithoutRegcolInputSchema).optional()
}).strict();

export default RegcolUncheckedCreateInputSchema;
