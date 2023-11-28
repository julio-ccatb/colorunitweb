import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsCreateWithoutRegcolInputSchema } from './RegcolcolorantsCreateWithoutRegcolInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema';

export const RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolcolorantsCreateOrConnectWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema;
