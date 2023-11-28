import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolUpdateWithoutTbaseInputSchema } from './RegcolUpdateWithoutTbaseInputSchema';
import { RegcolUncheckedUpdateWithoutTbaseInputSchema } from './RegcolUncheckedUpdateWithoutTbaseInputSchema';
import { RegcolCreateWithoutTbaseInputSchema } from './RegcolCreateWithoutTbaseInputSchema';
import { RegcolUncheckedCreateWithoutTbaseInputSchema } from './RegcolUncheckedCreateWithoutTbaseInputSchema';

export const RegcolUpsertWithWhereUniqueWithoutTbaseInputSchema: z.ZodType<Prisma.RegcolUpsertWithWhereUniqueWithoutTbaseInput> = z.object({
  where: z.lazy(() => RegcolWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RegcolUpdateWithoutTbaseInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutTbaseInputSchema) ]),
  create: z.union([ z.lazy(() => RegcolCreateWithoutTbaseInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutTbaseInputSchema) ]),
}).strict();

export default RegcolUpsertWithWhereUniqueWithoutTbaseInputSchema;
