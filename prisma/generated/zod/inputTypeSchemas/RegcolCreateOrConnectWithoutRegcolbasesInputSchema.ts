import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolCreateWithoutRegcolbasesInputSchema } from './RegcolCreateWithoutRegcolbasesInputSchema';
import { RegcolUncheckedCreateWithoutRegcolbasesInputSchema } from './RegcolUncheckedCreateWithoutRegcolbasesInputSchema';

export const RegcolCreateOrConnectWithoutRegcolbasesInputSchema: z.ZodType<Prisma.RegcolCreateOrConnectWithoutRegcolbasesInput> = z.object({
  where: z.lazy(() => RegcolWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolbasesInputSchema) ]),
}).strict();

export default RegcolCreateOrConnectWithoutRegcolbasesInputSchema;
