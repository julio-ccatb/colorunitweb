import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesUpdateWithoutBaseInputSchema } from './RegcolbasesUpdateWithoutBaseInputSchema';
import { RegcolbasesUncheckedUpdateWithoutBaseInputSchema } from './RegcolbasesUncheckedUpdateWithoutBaseInputSchema';

export const RegcolbasesUpdateWithWhereUniqueWithoutBaseInputSchema: z.ZodType<Prisma.RegcolbasesUpdateWithWhereUniqueWithoutBaseInput> = z.object({
  where: z.lazy(() => RegcolbasesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RegcolbasesUpdateWithoutBaseInputSchema),z.lazy(() => RegcolbasesUncheckedUpdateWithoutBaseInputSchema) ]),
}).strict();

export default RegcolbasesUpdateWithWhereUniqueWithoutBaseInputSchema;
