import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseCreateWithoutTbaseInputSchema } from './BaseCreateWithoutTbaseInputSchema';
import { BaseUncheckedCreateWithoutTbaseInputSchema } from './BaseUncheckedCreateWithoutTbaseInputSchema';
import { BaseCreateOrConnectWithoutTbaseInputSchema } from './BaseCreateOrConnectWithoutTbaseInputSchema';
import { BaseCreateManyTbaseInputEnvelopeSchema } from './BaseCreateManyTbaseInputEnvelopeSchema';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';

export const BaseCreateNestedManyWithoutTbaseInputSchema: z.ZodType<Prisma.BaseCreateNestedManyWithoutTbaseInput> = z.object({
  create: z.union([ z.lazy(() => BaseCreateWithoutTbaseInputSchema),z.lazy(() => BaseCreateWithoutTbaseInputSchema).array(),z.lazy(() => BaseUncheckedCreateWithoutTbaseInputSchema),z.lazy(() => BaseUncheckedCreateWithoutTbaseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BaseCreateOrConnectWithoutTbaseInputSchema),z.lazy(() => BaseCreateOrConnectWithoutTbaseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BaseCreateManyTbaseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BaseWhereUniqueInputSchema),z.lazy(() => BaseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BaseCreateNestedManyWithoutTbaseInputSchema;
