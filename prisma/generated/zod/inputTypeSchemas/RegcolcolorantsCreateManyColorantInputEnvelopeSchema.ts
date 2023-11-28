import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsCreateManyColorantInputSchema } from './RegcolcolorantsCreateManyColorantInputSchema';

export const RegcolcolorantsCreateManyColorantInputEnvelopeSchema: z.ZodType<Prisma.RegcolcolorantsCreateManyColorantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RegcolcolorantsCreateManyColorantInputSchema),z.lazy(() => RegcolcolorantsCreateManyColorantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RegcolcolorantsCreateManyColorantInputEnvelopeSchema;
