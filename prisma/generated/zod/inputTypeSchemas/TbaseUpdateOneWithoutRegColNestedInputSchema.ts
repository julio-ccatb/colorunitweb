import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateWithoutRegcolInputSchema } from './TbaseCreateWithoutRegcolInputSchema';
import { TbaseUncheckedCreateWithoutRegcolInputSchema } from './TbaseUncheckedCreateWithoutRegcolInputSchema';
import { TbaseCreateOrConnectWithoutRegcolInputSchema } from './TbaseCreateOrConnectWithoutRegcolInputSchema';
import { TbaseUpsertWithoutRegcolInputSchema } from './TbaseUpsertWithoutRegcolInputSchema';
import { TbaseWhereInputSchema } from './TbaseWhereInputSchema';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';
import { TbaseUpdateToOneWithWhereWithoutRegcolInputSchema } from './TbaseUpdateToOneWithWhereWithoutRegcolInputSchema';
import { TbaseUpdateWithoutRegcolInputSchema } from './TbaseUpdateWithoutRegcolInputSchema';
import { TbaseUncheckedUpdateWithoutRegcolInputSchema } from './TbaseUncheckedUpdateWithoutRegcolInputSchema';

export const TbaseUpdateOneWithoutRegcolNestedInputSchema: z.ZodType<Prisma.TbaseUpdateOneWithoutRegcolNestedInput> = z.object({
  create: z.union([ z.lazy(() => TbaseCreateWithoutRegcolInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutRegcolInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TbaseCreateOrConnectWithoutRegcolInputSchema).optional(),
  upsert: z.lazy(() => TbaseUpsertWithoutRegcolInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TbaseWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TbaseWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TbaseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TbaseUpdateToOneWithWhereWithoutRegcolInputSchema),z.lazy(() => TbaseUpdateWithoutRegcolInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutRegcolInputSchema) ]).optional(),
}).strict();

export default TbaseUpdateOneWithoutRegcolNestedInputSchema;
