import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsUpdateWithoutColorantInputSchema } from './RegcolcolorantsUpdateWithoutColorantInputSchema';
import { RegcolcolorantsUncheckedUpdateWithoutColorantInputSchema } from './RegcolcolorantsUncheckedUpdateWithoutColorantInputSchema';

export const RegcolcolorantsUpdateWithWhereUniqueWithoutColorantInputSchema: z.ZodType<Prisma.RegcolcolorantsUpdateWithWhereUniqueWithoutColorantInput> = z.object({
  where: z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RegcolcolorantsUpdateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUncheckedUpdateWithoutColorantInputSchema) ]),
}).strict();

export default RegcolcolorantsUpdateWithWhereUniqueWithoutColorantInputSchema;
