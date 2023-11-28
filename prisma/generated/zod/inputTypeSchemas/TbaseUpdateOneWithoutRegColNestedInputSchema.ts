import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateWithoutRegColInputSchema } from './TbaseCreateWithoutRegColInputSchema';
import { TbaseUncheckedCreateWithoutRegColInputSchema } from './TbaseUncheckedCreateWithoutRegColInputSchema';
import { TbaseCreateOrConnectWithoutRegColInputSchema } from './TbaseCreateOrConnectWithoutRegColInputSchema';
import { TbaseUpsertWithoutRegColInputSchema } from './TbaseUpsertWithoutRegColInputSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';
import { TbaseUpdateToOneWithWhereWithoutRegColInputSchema } from './TbaseUpdateToOneWithWhereWithoutRegColInputSchema';
import { TbaseUpdateWithoutRegColInputSchema } from './TbaseUpdateWithoutRegColInputSchema';
import { TbaseUncheckedUpdateWithoutRegColInputSchema } from './TbaseUncheckedUpdateWithoutRegColInputSchema';

export const TbaseUpdateOneWithoutRegColNestedInputSchema: z.ZodType<Prisma.TbaseUpdateOneWithoutRegColNestedInput> = z.object({
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegColInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegColInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TbaseCreateOrConnectWithoutRegColInputSchema).optional(),
  upsert: z.lazy(() => TbaseUpsertWithoutRegColInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TbaseWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TbaseWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TbaseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TbaseUpdateToOneWithWhereWithoutRegColInputSchema),z.lazy(() => TbaseUpdateWithoutRegColInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutRegColInputSchema) ]).optional(),
}).strict();

export default TbaseUpdateOneWithoutRegColNestedInputSchema;
