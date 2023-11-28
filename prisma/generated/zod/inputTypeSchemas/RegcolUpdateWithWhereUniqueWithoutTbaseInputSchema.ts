import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolUpdateWithoutTbaseInputSchema } from './RegcolUpdateWithoutTbaseInputSchema';
import { RegcolUncheckedUpdateWithoutTbaseInputSchema } from './RegcolUncheckedUpdateWithoutTbaseInputSchema';

export const RegcolUpdateWithWhereUniqueWithoutTbaseInputSchema: z.ZodType<Prisma.RegcolUpdateWithWhereUniqueWithoutTbaseInput> = z.object({
  where: z.lazy(() => RegcolWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RegcolUpdateWithoutTbaseInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutTbaseInputSchema) ]),
}).strict();

export default RegcolUpdateWithWhereUniqueWithoutTbaseInputSchema;
