import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BaseCreateManyInputSchema: z.ZodType<Prisma.BaseCreateManyInput> = z.object({
  id: z.number().int().optional(),
  reforiginal: z.string(),
  tbaseId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slang: z.string()
}).strict();

export default BaseCreateManyInputSchema;
