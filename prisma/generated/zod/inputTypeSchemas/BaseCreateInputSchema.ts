import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateNestedOneWithoutBaseInputSchema } from './TbaseCreateNestedOneWithoutBaseInputSchema';
import { RegcolbasesCreateNestedManyWithoutBaseInputSchema } from './RegcolbasesCreateNestedManyWithoutBaseInputSchema';

export const BaseCreateInputSchema: z.ZodType<Prisma.BaseCreateInput> = z.object({
  reforiginal: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slang: z.string(),
  tbase: z.lazy(() => TbaseCreateNestedOneWithoutBaseInputSchema),
  regcolbases: z.lazy(() => RegcolbasesCreateNestedManyWithoutBaseInputSchema).optional()
}).strict();

export default BaseCreateInputSchema;
