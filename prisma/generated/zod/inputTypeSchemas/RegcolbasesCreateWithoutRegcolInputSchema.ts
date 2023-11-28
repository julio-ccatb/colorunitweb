import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BaseCreateNestedOneWithoutRegcolbasesInputSchema } from './BaseCreateNestedOneWithoutRegcolbasesInputSchema';

export const RegcolbasesCreateWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolbasesCreateWithoutRegcolInput> = z.object({
  amount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  base: z.lazy(() => BaseCreateNestedOneWithoutRegcolbasesInputSchema)
}).strict();

export default RegcolbasesCreateWithoutRegcolInputSchema;
