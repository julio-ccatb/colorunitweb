import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereInputSchema } from './BaseWhereInputSchema';
import { BaseUpdateWithoutRegcolbasesInputSchema } from './BaseUpdateWithoutRegcolbasesInputSchema';
import { BaseUncheckedUpdateWithoutRegcolbasesInputSchema } from './BaseUncheckedUpdateWithoutRegcolbasesInputSchema';

export const BaseUpdateToOneWithWhereWithoutRegcolbasesInputSchema: z.ZodType<Prisma.BaseUpdateToOneWithWhereWithoutRegcolbasesInput> = z.object({
  where: z.lazy(() => BaseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BaseUpdateWithoutRegcolbasesInputSchema),z.lazy(() => BaseUncheckedUpdateWithoutRegcolbasesInputSchema) ]),
}).strict();

export default BaseUpdateToOneWithWhereWithoutRegcolbasesInputSchema;
