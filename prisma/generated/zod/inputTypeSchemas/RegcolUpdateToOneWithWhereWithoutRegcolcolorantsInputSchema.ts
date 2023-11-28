import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';
import { RegcolUpdateWithoutRegcolcolorantsInputSchema } from './RegcolUpdateWithoutRegcolcolorantsInputSchema';
import { RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema } from './RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema';

export const RegcolUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.RegcolUpdateToOneWithWhereWithoutRegcolcolorantsInput> = z.object({
  where: z.lazy(() => RegcolWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RegcolUpdateWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema) ]),
}).strict();

export default RegcolUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema;
