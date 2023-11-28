import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesCreateManyBaseInputSchema } from './RegcolbasesCreateManyBaseInputSchema';

export const RegcolbasesCreateManyBaseInputEnvelopeSchema: z.ZodType<Prisma.RegcolbasesCreateManyBaseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RegcolbasesCreateManyBaseInputSchema),z.lazy(() => RegcolbasesCreateManyBaseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RegcolbasesCreateManyBaseInputEnvelopeSchema;
