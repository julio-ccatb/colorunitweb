import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { ColorantCreateNestedOneWithoutRegcolcolorantsInputSchema } from './ColorantCreateNestedOneWithoutRegcolcolorantsInputSchema';

export const RegcolcolorantsCreateWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolcolorantsCreateWithoutRegcolInput> = z.object({
  amount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  colorant: z.lazy(() => ColorantCreateNestedOneWithoutRegcolcolorantsInputSchema)
}).strict();

export default RegcolcolorantsCreateWithoutRegcolInputSchema;
