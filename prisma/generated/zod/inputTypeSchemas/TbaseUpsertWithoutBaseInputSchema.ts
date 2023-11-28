import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseUpdateWithoutBaseInputSchema } from './TbaseUpdateWithoutBaseInputSchema';
import { TbaseUncheckedUpdateWithoutBaseInputSchema } from './TbaseUncheckedUpdateWithoutBaseInputSchema';
import { TbaseCreateWithoutBaseInputSchema } from './TbaseCreateWithoutBaseInputSchema';
import { TbaseUncheckedCreateWithoutBaseInputSchema } from './TbaseUncheckedCreateWithoutBaseInputSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';

export const TbaseUpsertWithoutBaseInputSchema: z.ZodType<Prisma.TbaseUpsertWithoutBaseInput> = z.object({
  update: z.union([ z.lazy(() => TbaseUpdateWithoutBaseInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutBaseInputSchema) ]),
  create: z.union([ z.lazy(() => TbaseCreateWithoutBaseInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutBaseInputSchema) ]),
  where: z.lazy(() => TbaseWhereInputSchema).optional()
}).strict();

export default TbaseUpsertWithoutBaseInputSchema;
