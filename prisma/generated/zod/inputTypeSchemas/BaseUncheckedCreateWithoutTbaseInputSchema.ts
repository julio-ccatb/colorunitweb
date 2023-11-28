import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesUncheckedCreateNestedManyWithoutBaseInputSchema } from './RegcolbasesUncheckedCreateNestedManyWithoutBaseInputSchema';

export const BaseUncheckedCreateWithoutTbaseInputSchema: z.ZodType<Prisma.BaseUncheckedCreateWithoutTbaseInput> = z.object({
  id: z.number().int().optional(),
  reforiginal: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slang: z.string(),
  regcolbases: z.lazy(() => RegcolbasesUncheckedCreateNestedManyWithoutBaseInputSchema).optional()
}).strict();

export default BaseUncheckedCreateWithoutTbaseInputSchema;
