import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseCreateWithoutTbaseInputSchema } from './BaseCreateWithoutTbaseInputSchema';
import { BaseUncheckedCreateWithoutTbaseInputSchema } from './BaseUncheckedCreateWithoutTbaseInputSchema';
import { BaseCreateOrConnectWithoutTbaseInputSchema } from './BaseCreateOrConnectWithoutTbaseInputSchema';
import { BaseUpsertWithWhereUniqueWithoutTbaseInputSchema } from './BaseUpsertWithWhereUniqueWithoutTbaseInputSchema';
import { BaseCreateManyTbaseInputEnvelopeSchema } from './BaseCreateManyTbaseInputEnvelopeSchema';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';
import { BaseUpdateWithWhereUniqueWithoutTbaseInputSchema } from './BaseUpdateWithWhereUniqueWithoutTbaseInputSchema';
import { BaseUpdateManyWithWhereWithoutTbaseInputSchema } from './BaseUpdateManyWithWhereWithoutTbaseInputSchema';
import { BaseScalarWhereInputSchema } from './BaseScalarWhereInputSchema';

export const BaseUpdateManyWithoutTbaseNestedInputSchema: z.ZodType<Prisma.BaseUpdateManyWithoutTbaseNestedInput> = z.object({
  create: z.union([ z.lazy(() => BaseCreateWithoutTbaseInputSchema),z.lazy(() => BaseCreateWithoutTbaseInputSchema).array(),z.lazy(() => BaseUncheckedCreateWithoutTbaseInputSchema),z.lazy(() => BaseUncheckedCreateWithoutTbaseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BaseCreateOrConnectWithoutTbaseInputSchema),z.lazy(() => BaseCreateOrConnectWithoutTbaseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BaseUpsertWithWhereUniqueWithoutTbaseInputSchema),z.lazy(() => BaseUpsertWithWhereUniqueWithoutTbaseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BaseCreateManyTbaseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BaseWhereUniqueInputSchema),z.lazy(() => BaseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BaseWhereUniqueInputSchema),z.lazy(() => BaseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BaseWhereUniqueInputSchema),z.lazy(() => BaseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BaseWhereUniqueInputSchema),z.lazy(() => BaseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BaseUpdateWithWhereUniqueWithoutTbaseInputSchema),z.lazy(() => BaseUpdateWithWhereUniqueWithoutTbaseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BaseUpdateManyWithWhereWithoutTbaseInputSchema),z.lazy(() => BaseUpdateManyWithWhereWithoutTbaseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BaseScalarWhereInputSchema),z.lazy(() => BaseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BaseUpdateManyWithoutTbaseNestedInputSchema;
