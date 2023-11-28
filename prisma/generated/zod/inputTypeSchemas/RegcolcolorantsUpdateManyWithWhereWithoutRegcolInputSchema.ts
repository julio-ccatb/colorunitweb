import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsScalarWhereInputSchema } from './RegcolcolorantsScalarWhereInputSchema';
import { RegcolcolorantsUpdateManyMutationInputSchema } from './RegcolcolorantsUpdateManyMutationInputSchema';
import { RegcolcolorantsUncheckedUpdateManyWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedUpdateManyWithoutRegcolInputSchema';

export const RegcolcolorantsUpdateManyWithWhereWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolcolorantsUpdateManyWithWhereWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolcolorantsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RegcolcolorantsUpdateManyMutationInputSchema),z.lazy(() => RegcolcolorantsUncheckedUpdateManyWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolcolorantsUpdateManyWithWhereWithoutRegcolInputSchema;
