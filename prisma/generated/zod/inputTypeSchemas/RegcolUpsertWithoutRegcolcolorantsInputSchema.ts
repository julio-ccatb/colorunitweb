import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolUpdateWithoutRegcolcolorantsInputSchema } from './RegcolUpdateWithoutRegcolcolorantsInputSchema';
import { RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema } from './RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema';
import { RegcolCreateWithoutRegcolcolorantsInputSchema } from './RegcolCreateWithoutRegcolcolorantsInputSchema';
import { RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema } from './RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';

export const RegcolUpsertWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.RegcolUpsertWithoutRegcolcolorantsInput> = z.object({
  update: z.union([ z.lazy(() => RegcolUpdateWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema) ]),
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema) ]),
  where: z.lazy(() => RegcolWhereInputSchema).optional()
}).strict();

export default RegcolUpsertWithoutRegcolcolorantsInputSchema;
