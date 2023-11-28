import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { ColorantUpdateOneRequiredWithoutRegcolcolorantsNestedInputSchema } from './ColorantUpdateOneRequiredWithoutRegcolcolorantsNestedInputSchema';

export const RegcolcolorantsUpdateWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolcolorantsUpdateWithoutRegcolInput> = z.object({
  amount: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  colorant: z.lazy(() => ColorantUpdateOneRequiredWithoutRegcolcolorantsNestedInputSchema).optional()
}).strict();

export default RegcolcolorantsUpdateWithoutRegcolInputSchema;
