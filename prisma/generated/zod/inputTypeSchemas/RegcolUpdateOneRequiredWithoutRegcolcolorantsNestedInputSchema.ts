import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolCreateWithoutRegcolcolorantsInputSchema } from './RegcolCreateWithoutRegcolcolorantsInputSchema';
import { RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema } from './RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema';
import { RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema } from './RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema';
import { RegcolUpsertWithoutRegcolcolorantsInputSchema } from './RegcolUpsertWithoutRegcolcolorantsInputSchema';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema } from './RegcolUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema';
import { RegcolUpdateWithoutRegcolcolorantsInputSchema } from './RegcolUpdateWithoutRegcolcolorantsInputSchema';
import { RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema } from './RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema';

export const RegcolUpdateOneRequiredWithoutRegcolcolorantsNestedInputSchema: z.ZodType<Prisma.RegcolUpdateOneRequiredWithoutRegcolcolorantsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegcolCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutRegcolcolorantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegcolCreateOrConnectWithoutRegcolcolorantsInputSchema).optional(),
  upsert: z.lazy(() => RegcolUpsertWithoutRegcolcolorantsInputSchema).optional(),
  connect: z.lazy(() => RegcolWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RegcolUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUpdateWithoutRegcolcolorantsInputSchema),z.lazy(() => RegcolUncheckedUpdateWithoutRegcolcolorantsInputSchema) ]).optional(),
}).strict();

export default RegcolUpdateOneRequiredWithoutRegcolcolorantsNestedInputSchema;
