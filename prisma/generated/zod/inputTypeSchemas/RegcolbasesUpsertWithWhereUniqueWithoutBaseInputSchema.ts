import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesUpdateWithoutBaseInputSchema } from './RegcolbasesUpdateWithoutBaseInputSchema';
import { RegcolbasesUncheckedUpdateWithoutBaseInputSchema } from './RegcolbasesUncheckedUpdateWithoutBaseInputSchema';
import { RegcolbasesCreateWithoutBaseInputSchema } from './RegcolbasesCreateWithoutBaseInputSchema';
import { RegcolbasesUncheckedCreateWithoutBaseInputSchema } from './RegcolbasesUncheckedCreateWithoutBaseInputSchema';

export const RegcolbasesUpsertWithWhereUniqueWithoutBaseInputSchema: z.ZodType<Prisma.RegcolbasesUpsertWithWhereUniqueWithoutBaseInput> = z.object({
  where: z.lazy(() => RegcolbasesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RegcolbasesUpdateWithoutBaseInputSchema),z.lazy(() => RegcolbasesUncheckedUpdateWithoutBaseInputSchema) ]),
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutBaseInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutBaseInputSchema) ]),
}).strict();

export default RegcolbasesUpsertWithWhereUniqueWithoutBaseInputSchema;
