import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsUpdateWithoutColorantInputSchema } from './RegcolcolorantsUpdateWithoutColorantInputSchema';
import { RegcolcolorantsUncheckedUpdateWithoutColorantInputSchema } from './RegcolcolorantsUncheckedUpdateWithoutColorantInputSchema';
import { RegcolcolorantsCreateWithoutColorantInputSchema } from './RegcolcolorantsCreateWithoutColorantInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutColorantInputSchema } from './RegcolcolorantsUncheckedCreateWithoutColorantInputSchema';

export const RegcolcolorantsUpsertWithWhereUniqueWithoutColorantInputSchema: z.ZodType<Prisma.RegcolcolorantsUpsertWithWhereUniqueWithoutColorantInput> = z.object({
  where: z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RegcolcolorantsUpdateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUncheckedUpdateWithoutColorantInputSchema) ]),
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutColorantInputSchema) ]),
}).strict();

export default RegcolcolorantsUpsertWithWhereUniqueWithoutColorantInputSchema;
