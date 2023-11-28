import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TbaseCreateWithoutBaseInputSchema } from './TbaseCreateWithoutBaseInputSchema';
import { TbaseUncheckedCreateWithoutBaseInputSchema } from './TbaseUncheckedCreateWithoutBaseInputSchema';
import { TbaseCreateOrConnectWithoutBaseInputSchema } from './TbaseCreateOrConnectWithoutBaseInputSchema';
import { TbaseUpsertWithoutBaseInputSchema } from './TbaseUpsertWithoutBaseInputSchema';
import { TbaseWhereUniqueInputSchema } from './TbaseWhereUniqueInputSchema';
import { TbaseUpdateToOneWithWhereWithoutBaseInputSchema } from './TbaseUpdateToOneWithWhereWithoutBaseInputSchema';
import { TbaseUpdateWithoutBaseInputSchema } from './TbaseUpdateWithoutBaseInputSchema';
import { TbaseUncheckedUpdateWithoutBaseInputSchema } from './TbaseUncheckedUpdateWithoutBaseInputSchema';

export const TbaseUpdateOneRequiredWithoutBaseNestedInputSchema: z.ZodType<Prisma.TbaseUpdateOneRequiredWithoutBaseNestedInput> = z.object({
  create: z.union([ z.lazy(() => TbaseCreateWithoutBaseInputSchema),z.lazy(() => TbaseUncheckedCreateWithoutBaseInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TbaseCreateOrConnectWithoutBaseInputSchema).optional(),
  upsert: z.lazy(() => TbaseUpsertWithoutBaseInputSchema).optional(),
  connect: z.lazy(() => TbaseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TbaseUpdateToOneWithWhereWithoutBaseInputSchema),z.lazy(() => TbaseUpdateWithoutBaseInputSchema),z.lazy(() => TbaseUncheckedUpdateWithoutBaseInputSchema) ]).optional(),
}).strict();

export default TbaseUpdateOneRequiredWithoutBaseNestedInputSchema;
