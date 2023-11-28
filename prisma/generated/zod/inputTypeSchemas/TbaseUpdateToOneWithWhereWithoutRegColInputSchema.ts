import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { TbaseUpdateWithoutRegColInputSchema } from './TbaseUpdateWithoutRegColInputSchema';
import { TbaseUncheckedUpdateWithoutRegColInputSchema } from './TbaseUncheckedUpdateWithoutRegColInputSchema';

export const TbaseUpdateToOneWithWhereWithoutRegColInputSchema: z.ZodType<Prisma.TbaseUpdateToOneWithWhereWithoutRegColInput> = z.object({
  where: z.lazy(() => TbaseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TbaseUpdateWithoutRegColInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutRegColInputSchema) ]),
}).strict();

export default TbaseUpdateToOneWithWhereWithoutRegColInputSchema;
