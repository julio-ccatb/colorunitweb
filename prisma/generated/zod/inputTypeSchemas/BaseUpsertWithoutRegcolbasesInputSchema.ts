import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseUpdateWithoutRegcolbasesInputSchema } from './BaseUpdateWithoutRegcolbasesInputSchema';
import { BaseUncheckedUpdateWithoutRegcolbasesInputSchema } from './BaseUncheckedUpdateWithoutRegcolbasesInputSchema';
import { BaseCreateWithoutRegcolbasesInputSchema } from './BaseCreateWithoutRegcolbasesInputSchema';
import { BaseUncheckedCreateWithoutRegcolbasesInputSchema } from './BaseUncheckedCreateWithoutRegcolbasesInputSchema';
import { BaseWhereInputSchema } from './BaseWhereInputSchema';

export const BaseUpsertWithoutRegcolbasesInputSchema: z.ZodType<Prisma.BaseUpsertWithoutRegcolbasesInput> = z.object({
  update: z.union([ z.lazy(() => BaseUpdateWithoutRegcolbasesInputSchema),z.lazy(() => BaseUncheckedUpdateWithoutRegcolbasesInputSchema) ]),
  create: z.union([ z.lazy(() => BaseCreateWithoutRegcolbasesInputSchema),z.lazy(() => BaseUncheckedCreateWithoutRegcolbasesInputSchema) ]),
  where: z.lazy(() => BaseWhereInputSchema).optional()
}).strict();

export default BaseUpsertWithoutRegcolbasesInputSchema;
