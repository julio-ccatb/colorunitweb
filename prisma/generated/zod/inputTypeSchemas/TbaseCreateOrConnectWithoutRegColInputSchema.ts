import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';
import { TbaseCreateWithoutRegColInputSchema } from './TbaseCreateWithoutRegColInputSchema';
import { TbaseUncheckedCreateWithoutRegColInputSchema } from './TbaseUncheckedCreateWithoutRegColInputSchema';

export const TbaseCreateOrConnectWithoutRegColInputSchema: z.ZodType<Prisma.TbaseCreateOrConnectWithoutRegColInput> = z.object({
  where: z.lazy(() => TbaseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegColInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegColInputSchema) ]),
}).strict();

export default TbaseCreateOrConnectWithoutRegColInputSchema;
