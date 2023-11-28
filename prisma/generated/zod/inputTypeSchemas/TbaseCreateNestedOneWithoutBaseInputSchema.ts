import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateWithoutBaseInputSchema } from './TbaseCreateWithoutBaseInputSchema';
import { TbaseUncheckedCreateWithoutBaseInputSchema } from './TbaseUncheckedCreateWithoutBaseInputSchema';
import { TbaseCreateOrConnectWithoutBaseInputSchema } from './TbaseCreateOrConnectWithoutBaseInputSchema';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';

export const TbaseCreateNestedOneWithoutBaseInputSchema: z.ZodType<Prisma.TbaseCreateNestedOneWithoutBaseInput> = z.object({
  create: z.union([ z.lazy(() => TbaseCreateWithoutBaseInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutBaseInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TbaseCreateOrConnectWithoutBaseInputSchema).optional(),
  connect: z.lazy(() => TbaseWhereUniqueInputSchema).optional()
}).strict();

export default TbaseCreateNestedOneWithoutBaseInputSchema;
