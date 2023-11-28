import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesCreateWithoutRegcolInputSchema } from './RegcolbasesCreateWithoutRegcolInputSchema';
import { RegcolbasesUncheckedCreateWithoutRegcolInputSchema } from './RegcolbasesUncheckedCreateWithoutRegcolInputSchema';
import { RegcolbasesCreateOrConnectWithoutRegcolInputSchema } from './RegcolbasesCreateOrConnectWithoutRegcolInputSchema';
import { RegcolbasesCreateManyRegcolInputEnvelopeSchema } from './RegcolbasesCreateManyRegcolInputEnvelopeSchema';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';

export const RegcolbasesCreateNestedManyWithoutRegcolInputSchema: z.ZodType<Prisma.RegcolbasesCreateNestedManyWithoutRegcolInput> = z.object({
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesCreateWithoutRegcolInputSchema).array(),z.lazy(() => RegcolbasesUncheckedCreateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutRegcolInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolbasesCreateOrConnectWithoutRegcolInputSchema),z.lazy(() => RegcolbasesCreateOrConnectWithoutRegcolInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolbasesCreateManyRegcolInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RegcolbasesCreateNestedManyWithoutRegcolInputSchema;
