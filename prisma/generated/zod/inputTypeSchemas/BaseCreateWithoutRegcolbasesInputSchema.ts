import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateNestedOneWithoutBaseInputSchema } from './TbaseCreateNestedOneWithoutBaseInputSchema';

export const BaseCreateWithoutRegcolbasesInputSchema: z.ZodType<Prisma.BaseCreateWithoutRegcolbasesInput> = z.object({
  reforiginal: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slang: z.string(),
  tbase: z.lazy(() => TbaseCreateNestedOneWithoutBaseInputSchema)
}).strict();

export default BaseCreateWithoutRegcolbasesInputSchema;
