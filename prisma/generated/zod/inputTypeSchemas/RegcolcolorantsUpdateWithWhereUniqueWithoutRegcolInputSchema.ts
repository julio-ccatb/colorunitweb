import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsUpdateWithoutRegcolInputSchema } from './RegcolcolorantsUpdateWithoutRegcolInputSchema';
import { RegcolcolorantsUncheckedUpdateWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedUpdateWithoutRegcolInputSchema';

export const RegcolcolorantsUpdateWithWhereUniqueWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolcolorantsUpdateWithWhereUniqueWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RegcolcolorantsUpdateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUncheckedUpdateWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolcolorantsUpdateWithWhereUniqueWithoutRegcolInputSchema;
