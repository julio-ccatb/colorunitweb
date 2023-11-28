import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesCreateManyRegcolInputSchema } from './RegcolbasesCreateManyRegcolInputSchema';

export const RegcolbasesCreateManyRegcolInputEnvelopeSchema: z.ZodType<Prisma.RegcolbasesCreateManyRegcolInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RegcolbasesCreateManyRegcolInputSchema),z.lazy(() => RegcolbasesCreateManyRegcolInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RegcolbasesCreateManyRegcolInputEnvelopeSchema;
