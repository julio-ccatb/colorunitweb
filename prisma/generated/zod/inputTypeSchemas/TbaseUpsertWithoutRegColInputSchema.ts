import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseUpdateWithoutRegcolInputSchema } from './TbaseUpdateWithoutRegcolInputSchema';
import { TbaseUncheckedUpdateWithoutRegcolInputSchema } from './TbaseUncheckedUpdateWithoutRegcolInputSchema';
import { TbaseCreateWithoutRegcolInputSchema } from './TbaseCreateWithoutRegcolInputSchema';
import { TbaseUncheckedCreateWithoutRegcolInputSchema } from './TbaseUncheckedCreateWithoutRegcolInputSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';

export const TbaseUpsertWithoutRegcolInputSchema: z.ZodType<Prisma.TbaseUpsertWithoutRegcolInput> = z.object({
  update: z.union([ z.lazy(() => TbaseUpdateWithoutRegcolInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutRegcolInputSchema) ]),
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegcolInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegcolInputSchema) ]),
  where: z.lazy(() => TbaseWhereInputSchema).optional()
}).strict();

export default TbaseUpsertWithoutRegcolInputSchema;
