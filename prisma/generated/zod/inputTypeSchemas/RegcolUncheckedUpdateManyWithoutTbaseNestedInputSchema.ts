import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolCreateWithoutTbaseInputSchema } from './RegcolCreateWithoutTbaseInputSchema';
import { RegcolUncheckedCreateWithoutTbaseInputSchema } from './RegcolUncheckedCreateWithoutTbaseInputSchema';
import { RegcolCreateOrConnectWithoutTbaseInputSchema } from './RegcolCreateOrConnectWithoutTbaseInputSchema';
import { RegcolUpsertWithWhereUniqueWithoutTbaseInputSchema } from './RegcolUpsertWithWhereUniqueWithoutTbaseInputSchema';
import { RegcolCreateManyTbaseInputEnvelopeSchema } from './RegcolCreateManyTbaseInputEnvelopeSchema';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';
import { RegcolUpdateWithWhereUniqueWithoutTbaseInputSchema } from './RegcolUpdateWithWhereUniqueWithoutTbaseInputSchema';
import { RegcolUpdateManyWithWhereWithoutTbaseInputSchema } from './RegcolUpdateManyWithWhereWithoutTbaseInputSchema';
import { RegcolScalarWhereInputSchema } from './RegcolScalarWhereInputSchema';

export const RegcolUncheckedUpdateManyWithoutTbaseNestedInputSchema: z.ZodType<Prisma.RegcolUncheckedUpdateManyWithoutTbaseNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegcolCreateWithoutTbaseInputSchema),z.lazy(() => RegcolCreateWithoutTbaseInputSchema).array(),z.lazy(() => RegcolUncheckedCreateWithoutTbaseInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutTbaseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolCreateOrConnectWithoutTbaseInputSchema),z.lazy(() => RegcolCreateOrConnectWithoutTbaseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RegcolUpsertWithWhereUniqueWithoutTbaseInputSchema),z.lazy(() => RegcolUpsertWithWhereUniqueWithoutTbaseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolCreateManyTbaseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RegcolWhereUniqueInputSchema),z.lazy(() => RegcolWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RegcolWhereUniqueInputSchema),z.lazy(() => RegcolWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RegcolWhereUniqueInputSchema),z.lazy(() => RegcolWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RegcolWhereUniqueInputSchema),z.lazy(() => RegcolWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RegcolUpdateWithWhereUniqueWithoutTbaseInputSchema),z.lazy(() => RegcolUpdateWithWhereUniqueWithoutTbaseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RegcolUpdateManyWithWhereWithoutTbaseInputSchema),z.lazy(() => RegcolUpdateManyWithWhereWithoutTbaseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RegcolScalarWhereInputSchema),z.lazy(() => RegcolScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RegcolUncheckedUpdateManyWithoutTbaseNestedInputSchema;
