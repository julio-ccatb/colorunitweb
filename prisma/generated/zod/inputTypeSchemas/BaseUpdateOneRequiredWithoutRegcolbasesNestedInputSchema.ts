import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BaseCreateWithoutRegcolbasesInputSchema } from './BaseCreateWithoutRegcolbasesInputSchema';
import { BaseUncheckedCreateWithoutRegcolbasesInputSchema } from './BaseUncheckedCreateWithoutRegcolbasesInputSchema';
import { BaseCreateOrConnectWithoutRegcolbasesInputSchema } from './BaseCreateOrConnectWithoutRegcolbasesInputSchema';
import { BaseUpsertWithoutRegcolbasesInputSchema } from './BaseUpsertWithoutRegcolbasesInputSchema';
import { BaseWhereUniqueInputSchema } from './BaseWhereUniqueInputSchema';
import { BaseUpdateToOneWithWhereWithoutRegcolbasesInputSchema } from './BaseUpdateToOneWithWhereWithoutRegcolbasesInputSchema';
import { BaseUpdateWithoutRegcolbasesInputSchema } from './BaseUpdateWithoutRegcolbasesInputSchema';
import { BaseUncheckedUpdateWithoutRegcolbasesInputSchema } from './BaseUncheckedUpdateWithoutRegcolbasesInputSchema';

export const BaseUpdateOneRequiredWithoutRegcolbasesNestedInputSchema: z.ZodType<Prisma.BaseUpdateOneRequiredWithoutRegcolbasesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BaseCreateWithoutRegcolbasesInputSchema),z.lazy(() => BaseUncheckedCreateWithoutRegcolbasesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BaseCreateOrConnectWithoutRegcolbasesInputSchema).optional(),
  upsert: z.lazy(() => BaseUpsertWithoutRegcolbasesInputSchema).optional(),
  connect: z.lazy(() => BaseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BaseUpdateToOneWithWhereWithoutRegcolbasesInputSchema),z.lazy(() => BaseUpdateWithoutRegcolbasesInputSchema),z.lazy(() => BaseUncheckedUpdateWithoutRegcolbasesInputSchema) ]).optional(),
}).strict();

export default BaseUpdateOneRequiredWithoutRegcolbasesNestedInputSchema;
