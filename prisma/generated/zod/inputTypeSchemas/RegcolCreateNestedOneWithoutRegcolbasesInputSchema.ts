import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolCreateWithoutRegcolbasesInputSchema } from './RegcolCreateWithoutRegcolbasesInputSchema';
import { RegcolUncheckedCreateWithoutRegcolbasesInputSchema } from './RegcolUncheckedCreateWithoutRegcolbasesInputSchema';
import { RegcolCreateOrConnectWithoutRegcolbasesInputSchema } from './RegcolCreateOrConnectWithoutRegcolbasesInputSchema';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';

export const RegcolCreateNestedOneWithoutRegcolbasesInputSchema: z.ZodType<Prisma.RegcolCreateNestedOneWithoutRegcolbasesInput> = z.object({
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolbasesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegcolCreateOrConnectWithoutRegcolbasesInputSchema).optional(),
  connect: z.lazy(() => RegcolWhereUniqueInputSchema).optional()
}).strict();

export default RegcolCreateNestedOneWithoutRegcolbasesInputSchema;
