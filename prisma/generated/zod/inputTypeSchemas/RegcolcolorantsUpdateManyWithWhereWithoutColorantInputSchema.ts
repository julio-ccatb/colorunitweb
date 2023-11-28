import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsScalarWhereInputSchema } from './RegcolcolorantsScalarWhereInputSchema';
import { RegcolcolorantsUpdateManyMutationInputSchema } from './RegcolcolorantsUpdateManyMutationInputSchema';
import { RegcolcolorantsUncheckedUpdateManyWithoutColorantInputSchema } from './RegcolcolorantsUncheckedUpdateManyWithoutColorantInputSchema';

export const RegcolcolorantsUpdateManyWithWhereWithoutColorantInputSchema: z.ZodType<Prisma.RegcolcolorantsUpdateManyWithWhereWithoutColorantInput> = z.object({
  where: z.lazy(() => RegcolcolorantsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RegcolcolorantsUpdateManyMutationInputSchema),z.lazy(() => RegcolcolorantsUncheckedUpdateManyWithoutColorantInputSchema) ]),
}).strict();

export default RegcolcolorantsUpdateManyWithWhereWithoutColorantInputSchema;
