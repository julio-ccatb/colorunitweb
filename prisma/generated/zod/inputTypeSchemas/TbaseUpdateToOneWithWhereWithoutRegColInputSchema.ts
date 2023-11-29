import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { TbaseUpdateWithoutRegcolInputSchema } from './TbaseUpdateWithoutRegcolInputSchema';
import { TbaseUncheckedUpdateWithoutRegcolInputSchema } from './TbaseUncheckedUpdateWithoutRegcolInputSchema';

export const TbaseUpdateToOneWithWhereWithoutRegcolInputSchema: z.ZodType<Prisma.TbaseUpdateToOneWithWhereWithoutRegcolInput> = z.object({
  where: z.lazy(() => TbaseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TbaseUpdateWithoutRegcolInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutRegcolInputSchema) ]),
}).strict();

export default TbaseUpdateToOneWithWhereWithoutRegcolInputSchema;
