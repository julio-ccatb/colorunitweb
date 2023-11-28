import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesCreateWithoutBaseInputSchema } from './RegcolbasesCreateWithoutBaseInputSchema';
import { RegcolbasesUncheckedCreateWithoutBaseInputSchema } from './RegcolbasesUncheckedCreateWithoutBaseInputSchema';
import { RegcolbasesCreateOrConnectWithoutBaseInputSchema } from './RegcolbasesCreateOrConnectWithoutBaseInputSchema';
import { RegcolbasesUpsertWithWhereUniqueWithoutBaseInputSchema } from './RegcolbasesUpsertWithWhereUniqueWithoutBaseInputSchema';
import { RegcolbasesCreateManyBaseInputEnvelopeSchema } from './RegcolbasesCreateManyBaseInputEnvelopeSchema';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesUpdateWithWhereUniqueWithoutBaseInputSchema } from './RegcolbasesUpdateWithWhereUniqueWithoutBaseInputSchema';
import { RegcolbasesUpdateManyWithWhereWithoutBaseInputSchema } from './RegcolbasesUpdateManyWithWhereWithoutBaseInputSchema';
import { RegcolbasesScalarWhereInputSchema } from './RegcolbasesScalarWhereInputSchema';

export const RegcolbasesUncheckedUpdateManyWithoutBaseNestedInputSchema: z.ZodType<Prisma.RegcolbasesUncheckedUpdateManyWithoutBaseNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutBaseInputSchema),z.lazy(() => RegcolbasesCreateWithoutBaseInputSchema).array(),z.lazy(() => RegcolbasesUncheckedCreateWithoutBaseInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutBaseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolbasesCreateOrConnectWithoutBaseInputSchema),z.lazy(() => RegcolbasesCreateOrConnectWithoutBaseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegcolbasesUpsertWithWhereUniqueWithoutBaseInputSchema),z.lazy(() => RegcolbasesUpsertWithWhereUniqueWithoutBaseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolbasesCreateManyBaseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegcolbasesUpdateWithWhereUniqueWithoutBaseInputSchema),z.lazy(() => RegcolbasesUpdateWithWhereUniqueWithoutBaseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegcolbasesUpdateManyWithWhereWithoutBaseInputSchema),z.lazy(() => RegcolbasesUpdateManyWithWhereWithoutBaseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegcolbasesScalarWhereInputSchema),z.lazy(() => RegcolbasesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RegcolbasesUncheckedUpdateManyWithoutBaseNestedInputSchema;
