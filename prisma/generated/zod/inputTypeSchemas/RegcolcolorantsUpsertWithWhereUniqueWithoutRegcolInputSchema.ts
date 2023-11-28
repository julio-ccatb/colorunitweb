import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsUpdateWithoutRegcolInputSchema } from './RegcolcolorantsUpdateWithoutRegcolInputSchema';
import { RegcolcolorantsUncheckedUpdateWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedUpdateWithoutRegcolInputSchema';
import { RegcolcolorantsCreateWithoutRegcolInputSchema } from './RegcolcolorantsCreateWithoutRegcolInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema';

export const RegcolcolorantsUpsertWithWhereUniqueWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolcolorantsUpsertWithWhereUniqueWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RegcolcolorantsUpdateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUncheckedUpdateWithoutRegcolInputSchema) ]),
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolcolorantsUpsertWithWhereUniqueWithoutRegcolInputSchema;
