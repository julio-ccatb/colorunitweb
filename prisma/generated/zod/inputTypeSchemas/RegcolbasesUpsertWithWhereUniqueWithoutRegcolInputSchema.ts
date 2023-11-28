import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesUpdateWithoutRegcolInputSchema } from './RegcolbasesUpdateWithoutRegcolInputSchema';
import { RegcolbasesUncheckedUpdateWithoutRegcolInputSchema } from './RegcolbasesUncheckedUpdateWithoutRegcolInputSchema';
import { RegcolbasesCreateWithoutRegcolInputSchema } from './RegcolbasesCreateWithoutRegcolInputSchema';
import { RegcolbasesUncheckedCreateWithoutRegcolInputSchema } from './RegcolbasesUncheckedCreateWithoutRegcolInputSchema';

export const RegcolbasesUpsertWithWhereUniqueWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolbasesUpsertWithWhereUniqueWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolbasesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RegcolbasesUpdateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUncheckedUpdateWithoutRegcolInputSchema) ]),
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolbasesUpsertWithWhereUniqueWithoutRegcolInputSchema;
