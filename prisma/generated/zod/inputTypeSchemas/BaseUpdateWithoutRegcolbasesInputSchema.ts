import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TbaseUpdateOneRequiredWithoutBaseNestedInputSchema } from './TbaseUpdateOneRequiredWithoutBaseNestedInputSchema';

export const BaseUpdateWithoutRegcolbasesInputSchema: z.ZodType<Prisma.BaseUpdateWithoutRegcolbasesInput> = z.object({
  reforiginal: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  slang: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tbase: z.lazy(() => TbaseUpdateOneRequiredWithoutBaseNestedInputSchema).optional()
}).strict();

export default BaseUpdateWithoutRegcolbasesInputSchema;
