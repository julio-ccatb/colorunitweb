import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColorantWhereUniqueInputSchema } from './ColorantWhereUniqueInputSchema';
import { ColorantCreateWithoutRegcolcolorantsInputSchema } from './ColorantCreateWithoutRegcolcolorantsInputSchema';
import { ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema } from './ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema';

export const ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.ColorantCreateOrConnectWithoutRegcolcolorantsInput> = z.object({
  where: z.lazy(() => ColorantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColorantCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema) ]),
}).strict();

export default ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema;
