import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseCreateWithoutRegcolbasesInputSchema } from './BaseCreateWithoutRegcolbasesInputSchema';
import { BaseUncheckedCreateWithoutRegcolbasesInputSchema } from './BaseUncheckedCreateWithoutRegcolbasesInputSchema';
import { BaseCreateOrConnectWithoutRegcolbasesInputSchema } from './BaseCreateOrConnectWithoutRegcolbasesInputSchema';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';

export const BaseCreateNestedOneWithoutRegcolbasesInputSchema: z.ZodType<Prisma.BaseCreateNestedOneWithoutRegcolbasesInput> = z.object({
  create: z.union([ z.lazy(() => BaseCreateWithoutRegcolbasesInputSchema),z.lazy(() => BaseUncheckedCreateWithoutRegcolbasesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BaseCreateOrConnectWithoutRegcolbasesInputSchema).optional(),
  connect: z.lazy(() => BaseWhereUniqueInputSchema).optional()
}).strict();

export default BaseCreateNestedOneWithoutRegcolbasesInputSchema;
