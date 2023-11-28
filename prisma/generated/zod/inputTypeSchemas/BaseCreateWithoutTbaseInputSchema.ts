import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesCreateNestedManyWithoutBaseInputSchema } from './RegcolbasesCreateNestedManyWithoutBaseInputSchema';

export const BaseCreateWithoutTbaseInputSchema: z.ZodType<Prisma.BaseCreateWithoutTbaseInput> = z.object({
  reforiginal: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slang: z.string(),
  regcolbases: z.lazy(() => RegcolbasesCreateNestedManyWithoutBaseInputSchema).optional()
}).strict();

export default BaseCreateWithoutTbaseInputSchema;
