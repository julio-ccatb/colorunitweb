import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';
import { BaseUpdateWithoutTbaseInputSchema } from './BaseUpdateWithoutTbaseInputSchema';
import { BaseUncheckedUpdateWithoutTbaseInputSchema } from './BaseUncheckedUpdateWithoutTbaseInputSchema';

export const BaseUpdateWithWhereUniqueWithoutTbaseInputSchema: z.ZodType<Prisma.BaseUpdateWithWhereUniqueWithoutTbaseInput> = z.object({
  where: z.lazy(() => BaseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BaseUpdateWithoutTbaseInputSchema),z.lazy(() => BaseUncheckedUpdateWithoutTbaseInputSchema) ]),
}).strict();

export default BaseUpdateWithWhereUniqueWithoutTbaseInputSchema;
