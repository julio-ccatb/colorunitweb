import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateWithoutRegcolInputSchema } from './TbaseCreateWithoutRegcolInputSchema';
import { TbaseUncheckedCreateWithoutRegcolInputSchema } from './TbaseUncheckedCreateWithoutRegcolInputSchema';
import { TbaseCreateOrConnectWithoutRegcolInputSchema } from './TbaseCreateOrConnectWithoutRegcolInputSchema';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';

export const TbaseCreateNestedOneWithoutRegcolInputSchema: z.ZodType<Prisma.TbaseCreateNestedOneWithoutRegcolInput> = z.object({
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegcolInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegcolInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TbaseCreateOrConnectWithoutRegcolInputSchema).optional(),
  connect: z.lazy(() => TbaseWhereUniqueInputSchema).optional()
}).strict();

export default TbaseCreateNestedOneWithoutRegcolInputSchema;
