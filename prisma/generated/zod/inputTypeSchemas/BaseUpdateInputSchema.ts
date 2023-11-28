import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TbaseUpdateOneRequiredWithoutBaseNestedInputSchema } from './TbaseUpdateOneRequiredWithoutBaseNestedInputSchema';
import { RegcolbasesUpdateManyWithoutBaseNestedInputSchema } from './RegcolbasesUpdateManyWithoutBaseNestedInputSchema';

export const BaseUpdateInputSchema: z.ZodType<Prisma.BaseUpdateInput> = z.object({
  reforiginal: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slang: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tbase: z.lazy(() => TbaseUpdateOneRequiredWithoutBaseNestedInputSchema).optional(),
  regcolbases: z.lazy(() => RegcolbasesUpdateManyWithoutBaseNestedInputSchema).optional()
}).strict();

export default BaseUpdateInputSchema;
