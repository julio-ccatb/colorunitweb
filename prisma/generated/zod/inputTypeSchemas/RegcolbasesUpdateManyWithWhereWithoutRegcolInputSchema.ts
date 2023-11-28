import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesScalarWhereInputSchema } from './RegcolbasesScalarWhereInputSchema';
import { RegcolbasesUpdateManyMutationInputSchema } from './RegcolbasesUpdateManyMutationInputSchema';
import { RegcolbasesUncheckedUpdateManyWithoutRegcolInputSchema } from './RegcolbasesUncheckedUpdateManyWithoutRegcolInputSchema';

export const RegcolbasesUpdateManyWithWhereWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolbasesUpdateManyWithWhereWithoutRegcolInput> = z.object({
  where: z.lazy(() => RegcolbasesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RegcolbasesUpdateManyMutationInputSchema),z.lazy(() => RegcolbasesUncheckedUpdateManyWithoutRegcolInputSchema) ]),
}).strict();

export default RegcolbasesUpdateManyWithWhereWithoutRegcolInputSchema;
