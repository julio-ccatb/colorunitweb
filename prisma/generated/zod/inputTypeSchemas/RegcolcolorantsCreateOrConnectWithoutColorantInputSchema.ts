import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsCreateWithoutColorantInputSchema } from './RegcolcolorantsCreateWithoutColorantInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutColorantInputSchema } from './RegcolcolorantsUncheckedCreateWithoutColorantInputSchema';

export const RegcolcolorantsCreateOrConnectWithoutColorantInputSchema: z.ZodType<Prisma.RegcolcolorantsCreateOrConnectWithoutColorantInput> = z.object({
  where: z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutColorantInputSchema) ]),
}).strict();

export default RegcolcolorantsCreateOrConnectWithoutColorantInputSchema;
