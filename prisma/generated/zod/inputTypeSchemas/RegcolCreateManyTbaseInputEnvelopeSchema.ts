import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolCreateManyTbaseInputSchema } from './RegcolCreateManyTbaseInputSchema';

export const RegcolCreateManyTbaseInputEnvelopeSchema: z.ZodType<Prisma.RegcolCreateManyTbaseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RegcolCreateManyTbaseInputSchema),z.lazy(() => RegcolCreateManyTbaseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RegcolCreateManyTbaseInputEnvelopeSchema;
