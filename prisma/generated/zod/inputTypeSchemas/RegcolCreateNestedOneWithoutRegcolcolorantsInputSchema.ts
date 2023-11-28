import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolCreateWithoutRegcolcolorantsInputSchema } from './RegcolCreateWithoutRegcolcolorantsInputSchema';
import { RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema } from './RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema';
import { RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema } from './RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';

export const RegcolCreateNestedOneWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.RegcolCreateNestedOneWithoutRegcolcolorantsInput> = z.object({
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema).optional(),
  connect: z.lazy(() => RegcolWhereUniqueInputSchema).optional()
}).strict();

export default RegcolCreateNestedOneWithoutRegcolcolorantsInputSchema;
