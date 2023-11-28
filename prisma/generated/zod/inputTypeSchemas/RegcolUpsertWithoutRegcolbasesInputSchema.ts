import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolUpdateWithoutRegcolbasesInputSchema } from './RegcolUpdateWithoutRegcolbasesInputSchema';
import { RegcolUncheckedUpdateWithoutRegcolbasesInputSchema } from './RegcolUncheckedUpdateWithoutRegcolbasesInputSchema';
import { RegcolCreateWithoutRegcolbasesInputSchema } from './RegcolCreateWithoutRegcolbasesInputSchema';
import { RegcolUncheckedCreateWithoutRegcolbasesInputSchema } from './RegcolUncheckedCreateWithoutRegcolbasesInputSchema';
import { RegcolWhereInputSchema } from './RegcolWhereInputSchema';

export const RegcolUpsertWithoutRegcolbasesInputSchema: z.ZodType<Prisma.RegcolUpsertWithoutRegcolbasesInput> = z.object({
  update: z.union([ z.lazy(() => RegcolUpdateWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutRegcolbasesInputSchema) ]),
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolbasesInputSchema) ]),
  where: z.lazy(() => RegcolWhereInputSchema).optional()
}).strict();

export default RegcolUpsertWithoutRegcolbasesInputSchema;
