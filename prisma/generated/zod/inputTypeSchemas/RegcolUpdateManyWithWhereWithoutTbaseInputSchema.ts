import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolScalarWhereInputSchema } from './RegcolScalarWhereInputSchema';
import { RegcolUpdateManyMutationInputSchema } from './RegcolUpdateManyMutationInputSchema';
import { RegcolUncheckedUpdateManyWithoutTbaseInputSchema } from './RegcolUncheckedUpdateManyWithoutTbaseInputSchema';

export const RegcolUpdateManyWithWhereWithoutTbaseInputSchema: z.ZodType<Prisma.RegcolUpdateManyWithWhereWithoutTbaseInput> = z.object({
  where: z.lazy(() => RegcolScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RegcolUpdateManyMutationInputSchema),z.lazy(() => RegcolUncheckedUpdateManyWithoutTbaseInputSchema) ]),
}).strict();

export default RegcolUpdateManyWithWhereWithoutTbaseInputSchema;
