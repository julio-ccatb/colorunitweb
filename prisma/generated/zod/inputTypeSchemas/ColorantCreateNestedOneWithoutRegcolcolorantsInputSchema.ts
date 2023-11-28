import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColorantCreateWithoutRegcolcolorantsInputSchema } from './ColorantCreateWithoutRegcolcolorantsInputSchema';
import { ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema } from './ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema';
import { ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema } from './ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema';
import { ColorantWhereUniqueInputSchema } from './ColorantWhereUniqueInputSchema';

export const ColorantCreateNestedOneWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.ColorantCreateNestedOneWithoutRegcolcolorantsInput> = z.object({
  create: z.union([ z.lazy(() => ColorantCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema).optional(),
  connect: z.lazy(() => ColorantWhereUniqueInputSchema).optional()
}).strict();

export default ColorantCreateNestedOneWithoutRegcolcolorantsInputSchema;
