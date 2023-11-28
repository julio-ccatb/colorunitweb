import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { TbaseUpdateWithoutBaseInputSchema } from './TbaseUpdateWithoutBaseInputSchema';
import { TbaseUncheckedUpdateWithoutBaseInputSchema } from './TbaseUncheckedUpdateWithoutBaseInputSchema';

export const TbaseUpdateToOneWithWhereWithoutBaseInputSchema: z.ZodType<Prisma.TbaseUpdateToOneWithWhereWithoutBaseInput> = z.object({
  where: z.lazy(() => TbaseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TbaseUpdateWithoutBaseInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutBaseInputSchema) ]),
}).strict();

export default TbaseUpdateToOneWithWhereWithoutBaseInputSchema;
