import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { BaseCreateNestedOneWithoutRegcolbasesInputSchema } from './BaseCreateNestedOneWithoutRegcolbasesInputSchema';
import { RegcolCreateNestedOneWithoutRegcolbasesInputSchema } from './RegcolCreateNestedOneWithoutRegcolbasesInputSchema';

export const RegcolbasesCreateInputSchema: z.ZodType<Prisma.RegcolbasesCreateInput> = z.object({
  amount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  base: z.lazy(() => BaseCreateNestedOneWithoutRegcolbasesInputSchema),
  regcol: z.lazy(() => RegcolCreateNestedOneWithoutRegcolbasesInputSchema)
}).strict();

export default RegcolbasesCreateInputSchema;
