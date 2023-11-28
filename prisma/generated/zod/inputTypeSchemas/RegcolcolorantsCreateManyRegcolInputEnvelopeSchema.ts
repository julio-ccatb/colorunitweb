import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsCreateManyRegcolInputSchema } from './RegcolcolorantsCreateManyRegcolInputSchema';

export const RegcolcolorantsCreateManyRegcolInputEnvelopeSchema: z.ZodType<Prisma.RegcolcolorantsCreateManyRegcolInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RegcolcolorantsCreateManyRegcolInputSchema),z.lazy(() => RegcolcolorantsCreateManyRegcolInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RegcolcolorantsCreateManyRegcolInputEnvelopeSchema;
