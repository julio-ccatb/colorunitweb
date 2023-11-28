import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesCreateWithoutRegcolInputSchema } from './RegcolbasesCreateWithoutRegcolInputSchema';
import { RegcolbasesUncheckedCreateWithoutRegcolInputSchema } from './RegcolbasesUncheckedCreateWithoutRegcolInputSchema';

export const RegcolbasesCreateOrConnectWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolbasesCreateOrConnectWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolbasesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolbasesCreateOrConnectWithoutRegcolInputSchema;
