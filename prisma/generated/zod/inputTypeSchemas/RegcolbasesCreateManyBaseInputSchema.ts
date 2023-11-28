import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const RegcolbasesCreateManyBaseInputSchema: z.ZodType<Prisma.RegcolbasesCreateManyBaseInput> = z.object({
  id: z.number().int().optional(),
  regColId: z.number().int(),
  amount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
}).strict();

export default RegcolbasesCreateManyBaseInputSchema;
