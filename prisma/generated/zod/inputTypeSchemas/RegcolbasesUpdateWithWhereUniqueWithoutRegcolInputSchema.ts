import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesUpdateWithoutRegcolInputSchema } from './RegcolbasesUpdateWithoutRegcolInputSchema';
import { RegcolbasesUncheckedUpdateWithoutRegcolInputSchema } from './RegcolbasesUncheckedUpdateWithoutRegcolInputSchema';

export const RegcolbasesUpdateWithWhereUniqueWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolbasesUpdateWithWhereUniqueWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolbasesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RegcolbasesUpdateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUncheckedUpdateWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolbasesUpdateWithWhereUniqueWithoutRegcolInputSchema;
