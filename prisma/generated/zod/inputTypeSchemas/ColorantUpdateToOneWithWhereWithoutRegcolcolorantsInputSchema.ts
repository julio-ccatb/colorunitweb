import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColorantWhereInputSchema } from './ColorantWhereInputSchema';
import { ColorantUpdateWithoutRegcolcolorantsInputSchema } from './ColorantUpdateWithoutRegcolcolorantsInputSchema';
import { ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema } from './ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema';

export const ColorantUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema: z.ZodType<Prisma.ColorantUpdateToOneWithWhereWithoutRegcolcolorantsInput> = z.object({
  where: z.lazy(() => ColorantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ColorantUpdateWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema) ]),
}).strict();

export default ColorantUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema;
