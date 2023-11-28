import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesCreateWithoutBaseInputSchema } from './RegcolbasesCreateWithoutBaseInputSchema';
import { RegcolbasesUncheckedCreateWithoutBaseInputSchema } from './RegcolbasesUncheckedCreateWithoutBaseInputSchema';

export const RegcolbasesCreateOrConnectWithoutBaseInputSchema: z.ZodType<Prisma.RegcolbasesCreateOrConnectWithoutBaseInput> = z.object({
  where: z.lazy(() => RegcolbasesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutBaseInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutBaseInputSchema) ]),
}).strict();

export default RegcolbasesCreateOrConnectWithoutBaseInputSchema;
