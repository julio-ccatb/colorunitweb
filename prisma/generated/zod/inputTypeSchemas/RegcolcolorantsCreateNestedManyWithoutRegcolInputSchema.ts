import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsCreateWithoutRegcolInputSchema } from './RegcolcolorantsCreateWithoutRegcolInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema';
import { RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema } from './RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema';
import { RegcolcolorantsCreateManyRegcolInputEnvelopeSchema } from './RegcolcolorantsCreateManyRegcolInputEnvelopeSchema';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';

export const RegcolcolorantsCreateNestedManyWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolcolorantsCreateNestedManyWithoutRegcolInput> = z.object({
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsCreateWithoutRegcolInputSchema).array(),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolcolorantsCreateManyRegcolInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RegcolcolorantsCreateNestedManyWithoutRegcolInputSchema;
