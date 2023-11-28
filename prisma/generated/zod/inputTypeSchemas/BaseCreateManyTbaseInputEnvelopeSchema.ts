import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseCreateManyTbaseInputSchema } from './BaseCreateManyTbaseInputSchema';

export const BaseCreateManyTbaseInputEnvelopeSchema: z.ZodType<Prisma.BaseCreateManyTbaseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BaseCreateManyTbaseInputSchema),z.lazy(() => BaseCreateManyTbaseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BaseCreateManyTbaseInputEnvelopeSchema;
