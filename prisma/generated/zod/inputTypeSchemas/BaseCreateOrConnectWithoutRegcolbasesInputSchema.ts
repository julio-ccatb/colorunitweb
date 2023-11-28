import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';
import { BaseCreateWithoutRegcolbasesInputSchema } from './BaseCreateWithoutRegcolbasesInputSchema';
import { BaseUncheckedCreateWithoutRegcolbasesInputSchema } from './BaseUncheckedCreateWithoutRegcolbasesInputSchema';

export const BaseCreateOrConnectWithoutRegcolbasesInputSchema: z.ZodType<Prisma.BaseCreateOrConnectWithoutRegcolbasesInput> = z.object({
  where: z.lazy(() => BaseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BaseCreateWithoutRegcolbasesInputSchema),z.lazy(() => BaseUncheckedCreateWithoutRegcolbasesInputSchema) ]),
}).strict();

export default BaseCreateOrConnectWithoutRegcolbasesInputSchema;
