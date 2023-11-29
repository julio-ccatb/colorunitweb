import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';
import { TbaseCreateWithoutRegcolInputSchema } from './TbaseCreateWithoutRegcolInputSchema';
import { TbaseUncheckedCreateWithoutRegcolInputSchema } from './TbaseUncheckedCreateWithoutRegcolInputSchema';

export const TbaseCreateOrConnectWithoutRegcolInputSchema: z.ZodType<Prisma.TbaseCreateOrConnectWithoutRegcolInput> = z.object({
  where: z.lazy(() => TbaseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegcolInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegcolInputSchema) ]),
}).strict();

export default TbaseCreateOrConnectWithoutRegcolInputSchema;
