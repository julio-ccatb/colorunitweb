import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';
import { BaseCreateWithoutTbaseInputSchema } from './BaseCreateWithoutTbaseInputSchema';
import { BaseUncheckedCreateWithoutTbaseInputSchema } from './BaseUncheckedCreateWithoutTbaseInputSchema';

export const BaseCreateOrConnectWithoutTbaseInputSchema: z.ZodType<Prisma.BaseCreateOrConnectWithoutTbaseInput> = z.object({
  where: z.lazy(() => BaseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BaseCreateWithoutTbaseInputSchema),z.lazy(() => BaseUncheckedCreateWithoutTbaseInputSchema) ]),
}).strict();

export default BaseCreateOrConnectWithoutTbaseInputSchema;
