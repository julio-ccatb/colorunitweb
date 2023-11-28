import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesScalarWhereInputSchema } from './RegcolbasesScalarWhereInputSchema';
import { RegcolbasesUpdateManyMutationInputSchema } from './RegcolbasesUpdateManyMutationInputSchema';
import { RegcolbasesUncheckedUpdateManyWithoutBaseInputSchema } from './RegcolbasesUncheckedUpdateManyWithoutBaseInputSchema';

export const RegcolbasesUpdateManyWithWhereWithoutBaseInputSchema: z.ZodType<Prisma.RegcolbasesUpdateManyWithWhereWithoutBaseInput> = z.object({
  where: z.lazy(() => RegcolbasesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RegcolbasesUpdateManyMutationInputSchema),z.lazy(() => RegcolbasesUncheckedUpdateManyWithoutBaseInputSchema) ]),
}).strict();

export default RegcolbasesUpdateManyWithWhereWithoutBaseInputSchema;
