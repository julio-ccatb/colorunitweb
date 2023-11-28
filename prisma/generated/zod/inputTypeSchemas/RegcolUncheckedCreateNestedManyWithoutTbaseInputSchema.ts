import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegcolCreateWithoutTbaseInputSchema } from './RegcolCreateWithoutTbaseInputSchema';
import { RegcolUncheckedCreateWithoutTbaseInputSchema } from './RegcolUncheckedCreateWithoutTbaseInputSchema';
import { RegcolCreateOrConnectWithoutTbaseInputSchema } from './RegcolCreateOrConnectWithoutTbaseInputSchema';
import { RegcolCreateManyTbaseInputEnvelopeSchema } from './RegcolCreateManyTbaseInputEnvelopeSchema';
import { RegcolWhereUniqueInputSchema } from './RegcolWhereUniqueInputSchema';

export const RegcolUncheckedCreateNestedManyWithoutTbaseInputSchema: z.ZodType<Prisma.RegcolUncheckedCreateNestedManyWithoutTbaseInput> = z.object({
  create: z.union([ z.lazy(() => RegcolCreateWithoutTbaseInputSchema),z.lazy(() => RegcolCreateWithoutTbaseInputSchema).array(),z.lazy(() => RegcolUncheckedCreateWithoutTbaseInputSchema),z.lazy(() => RegcolUncheckedCreateWithoutTbaseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RegcolCreateOrConnectWithoutTbaseInputSchema),z.lazy(() => RegcolCreateOrConnectWithoutTbaseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RegcolCreateManyTbaseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RegcolWhereUniqueInputSchema),z.lazy(() => RegcolWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RegcolUncheckedCreateNestedManyWithoutTbaseInputSchema;
