import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesUncheckedCreateNestedManyWithoutBaseInputSchema } from './RegcolbasesUncheckedCreateNestedManyWithoutBaseInputSchema';

export const BaseUncheckedCreateInputSchema: z.ZodType<Prisma.BaseUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  reforiginal: z.string(),
  tbaseId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slang: z.string(),
  regcolbases: z.lazy(() => RegcolbasesUncheckedCreateNestedManyWithoutBaseInputSchema).optional()
}).strict();

export default BaseUncheckedCreateInputSchema;
