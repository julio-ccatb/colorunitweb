import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolCreateWithoutTbaseInputSchema } from './RegcolCreateWithoutTbaseInputSchema';
import { RegcolUncheckedCreateWithoutTbaseInputSchema } from './RegcolUncheckedCreateWithoutTbaseInputSchema';

export const RegcolCreateOrConnectWithoutTbaseInputSchema: z.ZodType<Prisma.RegcolCreateOrConnectWithoutTbaseInput> = z.object({
  where: z.lazy(() => RegcolWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegcolCreateWithoutTbaseInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutTbaseInputSchema) ]),
}).strict();

export default RegcolCreateOrConnectWithoutTbaseInputSchema;
