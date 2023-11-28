import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';
import { BaseUpdateWithoutTbaseInputSchema } from './BaseUpdateWithoutTbaseInputSchema';
import { BaseUncheckedUpdateWithoutTbaseInputSchema } from './BaseUncheckedUpdateWithoutTbaseInputSchema';
import { BaseCreateWithoutTbaseInputSchema } from './BaseCreateWithoutTbaseInputSchema';
import { BaseUncheckedCreateWithoutTbaseInputSchema } from './BaseUncheckedCreateWithoutTbaseInputSchema';

export const BaseUpsertWithWhereUniqueWithoutTbaseInputSchema: z.ZodType<Prisma.BaseUpsertWithWhereUniqueWithoutTbaseInput> = z.object({
  where: z.lazy(() => BaseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BaseUpdateWithoutTbaseInputSchema),z.lazy(() => BaseUncheckedUpdateWithoutTbaseInputSchema) ]),
  create: z.union([ z.lazy(() => BaseCreateWithoutTbaseInputSchema),z.lazy(() => BaseUncheckedCreateWithoutTbaseInputSchema) ]),
}).strict();

export default BaseUpsertWithWhereUniqueWithoutTbaseInputSchema;
