import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ColorantCreateWithoutRegcolcolorantsInputSchema } from './ColorantCreateWithoutRegcolcolorantsInputSchema';
import { ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema } from './ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema';
import { ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema } from './ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema';
import { ColorantUpsertWithoutRegcolcolorantsInputSchema } from './ColorantUpsertWithoutRegcolcolorantsInputSchema';
import { ColorantWhereUniqueInputSchema } from './ColorantWhereUniqueInputSchema';
import { ColorantUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema } from './ColorantUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema';
import { ColorantUpdateWithoutRegcolcolorantsInputSchema } from './ColorantUpdateWithoutRegcolcolorantsInputSchema';
import { ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema } from './ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema';

export const ColorantUpdateOneRequiredWithoutRegcolcolorantsNestedInputSchema: z.ZodType<Prisma.ColorantUpdateOneRequiredWithoutRegcolcolorantsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColorantCreateWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColorantCreateOrConnectWithoutRegcolcolorantsInputSchema).optional(),
  upsert: z.lazy(() => ColorantUpsertWithoutRegcolcolorantsInputSchema).optional(),
  connect: z.lazy(() => ColorantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ColorantUpdateToOneWithWhereWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUpdateWithoutRegcolcolorantsInputSchema),z.lazy(() => ColorantUncheckedUpdateWithoutRegcolcolorantsInputSchema) ]).optional(),
}).strict();

export default ColorantUpdateOneRequiredWithoutRegcolcolorantsNestedInputSchema;
