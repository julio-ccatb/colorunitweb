import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseScalarWhereInputSchema } from './BaseScalarWhereInputSchema';
import { BaseUpdateManyMutationInputSchema } from './BaseUpdateManyMutationInputSchema';
import { BaseUncheckedUpdateManyWithoutTbaseInputSchema } from './BaseUncheckedUpdateManyWithoutTbaseInputSchema';

export const BaseUpdateManyWithWhereWithoutTbaseInputSchema: z.ZodType<Prisma.BaseUpdateManyWithWhereWithoutTbaseInput> = z.object({
  where: z.lazy(() => BaseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BaseUpdateManyMutationInputSchema),z.lazy(() => BaseUncheckedUpdateManyWithoutTbaseInputSchema) ]),
}).strict();

export default BaseUpdateManyWithWhereWithoutTbaseInputSchema;
