import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsCreateWithoutColorantInputSchema } from './RegcolcolorantsCreateWithoutColorantInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutColorantInputSchema } from './RegcolcolorantsUncheckedCreateWithoutColorantInputSchema';
import { RegcolcolorantsCreateOrConnectWithoutColorantInputSchema } from './RegcolcolorantsCreateOrConnectWithoutColorantInputSchema';
import { RegcolcolorantsCreateManyColorantInputEnvelopeSchema } from './RegcolcolorantsCreateManyColorantInputEnvelopeSchema';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';

export const RegcolcolorantsUncheckedCreateNestedManyWithoutColorantInputSchema: z.ZodType<Prisma.RegcolcolorantsUncheckedCreateNestedManyWithoutColorantInput> = z.object({
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsCreateWithoutColorantInputSchema).array(),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutColorantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolcolorantsCreateOrConnectWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsCreateOrConnectWithoutColorantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolcolorantsCreateManyColorantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RegcolcolorantsUncheckedCreateNestedManyWithoutColorantInputSchema;
