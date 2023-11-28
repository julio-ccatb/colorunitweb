import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseUpdateWithoutRegColInputSchema } from './TbaseUpdateWithoutRegColInputSchema';
import { TbaseUncheckedUpdateWithoutRegColInputSchema } from './TbaseUncheckedUpdateWithoutRegColInputSchema';
import { TbaseCreateWithoutRegColInputSchema } from './TbaseCreateWithoutRegColInputSchema';
import { TbaseUncheckedCreateWithoutRegColInputSchema } from './TbaseUncheckedCreateWithoutRegColInputSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';

export const TbaseUpsertWithoutRegColInputSchema: z.ZodType<Prisma.TbaseUpsertWithoutRegColInput> = z.object({
  update: z.union([ z.lazy(() => TbaseUpdateWithoutRegColInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutRegColInputSchema) ]),
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegColInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegColInputSchema) ]),
  where: z.lazy(() => TbaseWhereInputSchema).optional()
}).strict();

export default TbaseUpsertWithoutRegColInputSchema;
