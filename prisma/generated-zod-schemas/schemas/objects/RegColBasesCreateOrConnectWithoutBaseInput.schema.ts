import { z } from 'zod';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesCreateWithoutBaseInputObjectSchema } from './RegColBasesCreateWithoutBaseInput.schema';
import { RegColBasesUncheckedCreateWithoutBaseInputObjectSchema } from './RegColBasesUncheckedCreateWithoutBaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateOrConnectWithoutBaseInput> = z
  .object({
    where: z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RegColBasesCreateWithoutBaseInputObjectSchema),
      z.lazy(() => RegColBasesUncheckedCreateWithoutBaseInputObjectSchema),
    ]),
  })
  .strict();

export const RegColBasesCreateOrConnectWithoutBaseInputObjectSchema = Schema;
