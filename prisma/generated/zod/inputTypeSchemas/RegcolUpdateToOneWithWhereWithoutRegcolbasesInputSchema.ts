import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';
import { RegcolUpdateWithoutRegcolbasesInputSchema } from './RegcolUpdateWithoutRegcolbasesInputSchema';
import { RegcolUncheckedUpdateWithoutRegcolbasesInputSchema } from './RegcolUncheckedUpdateWithoutRegcolbasesInputSchema';

export const RegcolUpdateToOneWithWhereWithoutRegcolbasesInputSchema: z.ZodType<Prisma.RegcolUpdateToOneWithWhereWithoutRegcolbasesInput> = z.object({
  where: z.lazy(() => RegcolWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RegcolUpdateWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutRegcolbasesInputSchema) ]),
}).strict();

export default RegcolUpdateToOneWithWhereWithoutRegcolbasesInputSchema;
