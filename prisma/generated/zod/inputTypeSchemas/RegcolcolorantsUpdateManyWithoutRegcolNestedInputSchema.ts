import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsCreateWithoutRegcolInputSchema } from './RegcolcolorantsCreateWithoutRegcolInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema } from './RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema';
import { RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema } from './RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema';
import { RegcolcolorantsUpsertWithWhereUniqueWithoutRegcolInputSchema } from './RegcolcolorantsUpsertWithWhereUniqueWithoutRegcolInputSchema';
import { RegcolcolorantsCreateManyRegcolInputEnvelopeSchema } from './RegcolcolorantsCreateManyRegcolInputEnvelopeSchema';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsUpdateWithWhereUniqueWithoutRegcolInputSchema } from './RegcolcolorantsUpdateWithWhereUniqueWithoutRegcolInputSchema';
import { RegcolcolorantsUpdateManyWithWhereWithoutRegcolInputSchema } from './RegcolcolorantsUpdateManyWithWhereWithoutRegcolInputSchema';
import { RegcolcolorantsScalarWhereInputSchema } from './RegcolcolorantsScalarWhereInputSchema';

export const RegcolcolorantsUpdateManyWithoutRegcolNestedInputSchema: z.ZodType<Prisma.RegcolcolorantsUpdateManyWithoutRegcolNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsCreateWithoutRegcolInputSchema).array(),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutRegcolInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsCreateOrConnectWithoutRegcolInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegcolcolorantsUpsertWithWhereUniqueWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUpsertWithWhereUniqueWithoutRegcolInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolcolorantsCreateManyRegcolInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegcolcolorantsUpdateWithWhereUniqueWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUpdateWithWhereUniqueWithoutRegcolInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegcolcolorantsUpdateManyWithWhereWithoutRegcolInputSchema),z.lazy(() => RegcolcolorantsUpdateManyWithWhereWithoutRegcolInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegcolcolorantsScalarWhereInputSchema),z.lazy(() => RegcolcolorantsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RegcolcolorantsUpdateManyWithoutRegcolNestedInputSchema;
