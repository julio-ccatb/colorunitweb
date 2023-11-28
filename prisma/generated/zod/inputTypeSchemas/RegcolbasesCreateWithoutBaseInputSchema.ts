import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { RegcolCreateNestedOneWithoutRegcolbasesInputSchema } from './RegcolCreateNestedOneWithoutRegcolbasesInputSchema';

export const RegcolbasesCreateWithoutBaseInputSchema: z.ZodType<Prisma.RegcolbasesCreateWithoutBaseInput> = z.object({
  amount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  regcol: z.lazy(() => RegcolCreateNestedOneWithoutRegcolbasesInputSchema)
}).strict();

export default RegcolbasesCreateWithoutBaseInputSchema;
