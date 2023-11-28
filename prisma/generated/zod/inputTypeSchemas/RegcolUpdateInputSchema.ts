import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RegcolbasesUpdateManyWithoutRegcolNestedInputSchema } from './RegcolbasesUpdateManyWithoutRegcolNestedInputSchema';
import { RegcolcolorantsUpdateManyWithoutRegcolNestedInputSchema } from './RegcolcolorantsUpdateManyWithoutRegcolNestedInputSchema';
import { TbaseUpdateOneWithoutRegColNestedInputSchema } from './TbaseUpdateOneWithoutRegColNestedInputSchema';

export const RegcolUpdateInputSchema: z.ZodType<Prisma.RegcolUpdateInput> = z.object({
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  carta: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  R: z.union([ z.number().lte(255).nonnegative(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  G: z.union([ z.number().lte(255).nonnegative(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  B: z.union([ z.number().lte(255).nonnegative(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  process: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesopromedio: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  brillo: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  active: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  coeficienteG: z.union([ z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  regcolbases: z.lazy(() => RegcolbasesUpdateManyWithoutRegcolNestedInputSchema).optional(),
  regcolcolorants: z.lazy(() => RegcolcolorantsUpdateManyWithoutRegcolNestedInputSchema).optional(),
  Tbase: z.lazy(() => TbaseUpdateOneWithoutRegColNestedInputSchema).optional()
}).strict();

export default RegcolUpdateInputSchema;
