import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColorantUpdateWithoutRegcolcolorantsInputSchema } from './ColorantUpdateWithoutRegcolcolorantsInputSchema';
import { ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema } from './ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema';
import { ColorantCreateWithoutRegcolcolorantsInputSchema } from './ColorantCreateWithoutRegcolcolorantsInputSchema';
import { ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema } from './ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema';
import { ColorantWhereInputSchema } from './ColorantWhereInputSchema';

export const ColorantUpsertWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.ColorantUpsertWithoutRegcolcolorantsInput> = z.object({
  update: z.union([ z.lazy(() => ColorantUpdateWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema) ]),
  create: z.union([ z.lazy(() => ColorantCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema) ]),
  where: z.lazy(() => ColorantWhereInputSchema).optional()
}).strict();

export default ColorantUpsertWithoutRegcolcolorantsInputSchema;
