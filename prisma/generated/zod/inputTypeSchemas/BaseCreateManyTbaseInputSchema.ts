import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BaseCreateManyTbaseInputSchema: z.ZodType<Prisma.BaseCreateManyTbaseInput> = z.object({
  id: z.number().int().optional(),
  reforiginal: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  slang: z.string()
}).strict();

export default BaseCreateManyTbaseInputSchema;
