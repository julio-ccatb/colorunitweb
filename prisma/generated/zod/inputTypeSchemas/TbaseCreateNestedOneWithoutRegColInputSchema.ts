import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateWithoutRegColInputSchema } from './TbaseCreateWithoutRegColInputSchema';
import { TbaseUncheckedCreateWithoutRegColInputSchema } from './TbaseUncheckedCreateWithoutRegColInputSchema';
import { TbaseCreateOrConnectWithoutRegColInputSchema } from './TbaseCreateOrConnectWithoutRegColInputSchema';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';

export const TbaseCreateNestedOneWithoutRegColInputSchema: z.ZodType<Prisma.TbaseCreateNestedOneWithoutRegColInput> = z.object({
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegColInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegColInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TbaseCreateOrConnectWithoutRegColInputSchema).optional(),
  connect: z.lazy(() => TbaseWhereUniqueInputSchema).optional()
}).strict();

export default TbaseCreateNestedOneWithoutRegColInputSchema;
