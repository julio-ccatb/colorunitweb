import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolbasesCreateWithoutRegcolInputSchema } from './RegcolbasesCreateWithoutRegcolInputSchema';
import { RegcolbasesUncheckedCreateWithoutRegcolInputSchema } from './RegcolbasesUncheckedCreateWithoutRegcolInputSchema';
import { RegcolbasesCreateOrConnectWithoutRegcolInputSchema } from './RegcolbasesCreateOrConnectWithoutRegcolInputSchema';
import { RegcolbasesUpsertWithWhereUniqueWithoutRegcolInputSchema } from './RegcolbasesUpsertWithWhereUniqueWithoutRegcolInputSchema';
import { RegcolbasesCreateManyRegcolInputEnvelopeSchema } from './RegcolbasesCreateManyRegcolInputEnvelopeSchema';
import { RegcolbasesWhereUniqueInputSchema } from './RegcolbasesWhereUniqueInputSchema';
import { RegcolbasesUpdateWithWhereUniqueWithoutRegcolInputSchema } from './RegcolbasesUpdateWithWhereUniqueWithoutRegcolInputSchema';
import { RegcolbasesUpdateManyWithWhereWithoutRegcolInputSchema } from './RegcolbasesUpdateManyWithWhereWithoutRegcolInputSchema';
import { RegcolbasesScalarWhereInputSchema } from './RegcolbasesScalarWhereInputSchema';

export const RegcolbasesUpdateManyWithoutRegcolNestedInputSchema: z.ZodType<Prisma.RegcolbasesUpdateManyWithoutRegcolNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegcolbasesCreateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesCreateWithoutRegcolInputSchema).array(),z.lazy(() => RegcolbasesUncheckedCreateWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUncheckedCreateWithoutRegcolInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolbasesCreateOrConnectWithoutRegcolInputSchema),z.lazy(() => RegcolbasesCreateOrConnectWithoutRegcolInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegcolbasesUpsertWithWhereUniqueWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUpsertWithWhereUniqueWithoutRegcolInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolbasesCreateManyRegcolInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegcolbasesWhereUniqueInputSchema),z.lazy(() => RegcolbasesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegcolbasesUpdateWithWhereUniqueWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUpdateWithWhereUniqueWithoutRegcolInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegcolbasesUpdateManyWithWhereWithoutRegcolInputSchema),z.lazy(() => RegcolbasesUpdateManyWithWhereWithoutRegcolInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegcolbasesScalarWhereInputSchema),z.lazy(() => RegcolbasesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RegcolbasesUpdateManyWithoutRegcolNestedInputSchema;
