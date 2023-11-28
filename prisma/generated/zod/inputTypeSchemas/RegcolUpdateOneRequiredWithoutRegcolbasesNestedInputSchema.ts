import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolCreateWithoutRegcolbasesInputSchema } from './RegcolCreateWithoutRegcolbasesInputSchema';
import { RegcolUncheckedCreateWithoutRegcolbasesInputSchema } from './RegcolUncheckedCreateWithoutRegcolbasesInputSchema';
import { RegcolCreateOrConnectWithoutRegcolbasesInputSchema } from './RegcolCreateOrConnectWithoutRegcolbasesInputSchema';
import { RegcolUpsertWithoutRegcolbasesInputSchema } from './RegcolUpsertWithoutRegcolbasesInputSchema';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolUpdateToOneWithWhereWithoutRegcolbasesInputSchema } from './RegcolUpdateToOneWithWhereWithoutRegcolbasesInputSchema';
import { RegcolUpdateWithoutRegcolbasesInputSchema } from './RegcolUpdateWithoutRegcolbasesInputSchema';
import { RegcolUncheckedUpdateWithoutRegcolbasesInputSchema } from './RegcolUncheckedUpdateWithoutRegcolbasesInputSchema';

export const RegcolUpdateOneRequiredWithoutRegcolbasesNestedInputSchema: z.ZodType<Prisma.RegcolUpdateOneRequiredWithoutRegcolbasesNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolbasesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegcolCreateOrConnectWithoutRegcolbasesInputSchema).optional(),
  upsert: z.lazy(() => RegcolUpsertWithoutRegcolbasesInputSchema).optional(),
  connect: z.lazy(() => RegcolWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RegcolUpdateToOneWithWhereWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUpdateWithoutRegcolbasesInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutRegcolbasesInputSchema) ]).optional(),
}).strict();

export default RegcolUpdateOneRequiredWithoutRegcolbasesNestedInputSchema;
