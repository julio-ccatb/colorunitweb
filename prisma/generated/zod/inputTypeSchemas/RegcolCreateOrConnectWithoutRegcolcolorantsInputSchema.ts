import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolCreateWithoutRegcolcolorantsInputSchema } from './RegcolCreateWithoutRegcolcolorantsInputSchema';
import { RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema } from './RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema';

export const RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.RegcolCreateOrConnectWithoutRegcolcolorantsInput> = z.object({
  where: z.lazy(() => RegcolWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema) ]),
}).strict();

export default RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema;
