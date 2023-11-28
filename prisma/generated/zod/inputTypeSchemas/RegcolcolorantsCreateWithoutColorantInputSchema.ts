import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RegcolCreateNestedOneWithoutRegcolcolorantsInputSchema } from './RegcolCreateNestedOneWithoutRegcolcolorantsInputSchema';

export const RegcolcolorantsCreateWithoutColorantInputSchema: z.ZodType<Prisma.RegcolcolorantsCreateWithoutColorantInput> = z.object({
  amount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  regcol: z.lazy(() => RegcolCreateNestedOneWithoutRegcolcolorantsInputSchema)
}).strict();

export default RegcolcolorantsCreateWithoutColorantInputSchema;
