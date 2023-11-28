import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolcolorantsCreateWithoutColorantInputSchema } from './RegcolcolorantsCreateWithoutColorantInputSchema';
import { RegcolcolorantsUncheckedCreateWithoutColorantInputSchema } from './RegcolcolorantsUncheckedCreateWithoutColorantInputSchema';
import { RegcolcolorantsCreateOrConnectWithoutColorantInputSchema } from './RegcolcolorantsCreateOrConnectWithoutColorantInputSchema';
import { RegcolcolorantsUpsertWithWhereUniqueWithoutColorantInputSchema } from './RegcolcolorantsUpsertWithWhereUniqueWithoutColorantInputSchema';
import { RegcolcolorantsCreateManyColorantInputEnvelopeSchema } from './RegcolcolorantsCreateManyColorantInputEnvelopeSchema';
import { RegcolcolorantsWhereUniqueInputSchema } from './RegcolcolorantsWhereUniqueInputSchema';
import { RegcolcolorantsUpdateWithWhereUniqueWithoutColorantInputSchema } from './RegcolcolorantsUpdateWithWhereUniqueWithoutColorantInputSchema';
import { RegcolcolorantsUpdateManyWithWhereWithoutColorantInputSchema } from './RegcolcolorantsUpdateManyWithWhereWithoutColorantInputSchema';
import { RegcolcolorantsScalarWhereInputSchema } from './RegcolcolorantsScalarWhereInputSchema';

export const RegcolcolorantsUpdateManyWithoutColorantNestedInputSchema: z.ZodType<Prisma.RegcolcolorantsUpdateManyWithoutColorantNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegcolcolorantsCreateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsCreateWithoutColorantInputSchema).array(),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUncheckedCreateWithoutColorantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolcolorantsCreateOrConnectWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsCreateOrConnectWithoutColorantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegcolcolorantsUpsertWithWhereUniqueWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUpsertWithWhereUniqueWithoutColorantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolcolorantsCreateManyColorantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegcolcolorantsWhereUniqueInputSchema),z.lazy(() => RegcolcolorantsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegcolcolorantsUpdateWithWhereUniqueWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUpdateWithWhereUniqueWithoutColorantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegcolcolorantsUpdateManyWithWhereWithoutColorantInputSchema),z.lazy(() => RegcolcolorantsUpdateManyWithWhereWithoutColorantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegcolcolorantsScalarWhereInputSchema),z.lazy(() => RegcolcolorantsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RegcolcolorantsUpdateManyWithoutColorantNestedInputSchema;
