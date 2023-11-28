import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { BaseUpdateOneRequiredWithoutRegcolbasesNestedInputSchema } from './BaseUpdateOneRequiredWithoutRegcolbasesNestedInputSchema';
import { RegcolUpdateOneRequiredWithoutRegcolbasesNestedInputSchema } from './RegcolUpdateOneRequiredWithoutRegcolbasesNestedInputSchema';

export const RegcolbasesUpdateInputSchema: z.ZodType<Prisma.RegcolbasesUpdateInput> = z.object({
  amount: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  base: z.lazy(() => BaseUpdateOneRequiredWithoutRegcolbasesNestedInputSchema).optional(),
  regcol: z.lazy(() => RegcolUpdateOneRequiredWithoutRegcolbasesNestedInputSchema).optional()
}).strict();

export default RegcolbasesUpdateInputSchema;
