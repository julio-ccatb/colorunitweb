import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';
import { TbaseCreateWithoutBaseInputSchema } from './TbaseCreateWithoutBaseInputSchema';
import { TbaseUncheckedCreateWithoutBaseInputSchema } from './TbaseUncheckedCreateWithoutBaseInputSchema';

export const TbaseCreateOrConnectWithoutBaseInputSchema: z.ZodType<Prisma.TbaseCreateOrConnectWithoutBaseInput> = z.object({
  where: z.lazy(() => TbaseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TbaseCreateWithoutBaseInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutBaseInputSchema) ]),
}).strict();

export default TbaseCreateOrConnectWithoutBaseInputSchema;
