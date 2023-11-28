import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RegcolbasesUpdateManyWithoutBaseNestedInputSchema } from './RegcolbasesUpdateManyWithoutBaseNestedInputSchema';

export const BaseUpdateWithoutTbaseInputSchema: z.ZodType<Prisma.BaseUpdateWithoutTbaseInput> = z.object({
  reforiginal: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slang: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regcolbases: z.lazy(() => RegcolbasesUpdateManyWithoutBaseNestedInputSchema).optional()
}).strict();

export default BaseUpdateWithoutTbaseInputSchema;
