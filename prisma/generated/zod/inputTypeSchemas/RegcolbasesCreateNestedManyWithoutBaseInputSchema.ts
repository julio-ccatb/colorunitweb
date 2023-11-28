import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesCreateWithoutBaseInputSchema } from './RegcolbasesCreateWithoutBaseInputSchema';
import { RegcolbasesUncheckedCreateWithoutBaseInputSchema } from './RegcolbasesUncheckedCreateWithoutBaseInputSchema';
import { RegcolbasesCreateOrConnectWithoutBaseInputSchema } from './RegcolbasesCreateOrConnectWithoutBaseInputSchema';
import { RegcolbasesCreateManyBaseInputEnvelopeSchema } from './RegcolbasesCreateManyBaseInputEnvelopeSchema';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';

export const RegcolbasesCreateNestedManyWithoutBaseInputSchema: z.ZodType<Prisma.RegcolbasesCreateNestedManyWithoutBaseInput> = z.object({
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutBaseInputSchema),z.lazy(() => RegcolbasesCreateWithoutBaseInputSchema).array(),z.lazy(() => RegcolbasesUncheckedCreateWithoutBaseInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutBaseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolbasesCreateOrConnectWithoutBaseInputSchema),z.lazy(() => RegcolbasesCreateOrConnectWithoutBaseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolbasesCreateManyBaseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RegcolbasesCreateNestedManyWithoutBaseInputSchema;
