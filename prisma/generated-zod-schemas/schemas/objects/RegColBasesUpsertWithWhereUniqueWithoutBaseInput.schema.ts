import { z } from 'zod';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesUpdateWithoutBaseInputObjectSchema } from './RegColBasesUpdateWithoutBaseInput.schema';
import { RegColBasesUncheckedUpdateWithoutBaseInputObjectSchema } from './RegColBasesUncheckedUpdateWithoutBaseInput.schema';
import { RegColBasesCreateWithoutBaseInputObjectSchema } from './RegColBasesCreateWithoutBaseInput.schema';
import { RegColBasesUncheckedCreateWithoutBaseInputObjectSchema } from './RegColBasesUncheckedCreateWithoutBaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpsertWithWhereUniqueWithoutBaseInput> =
  z
    .object({
      where: z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RegColBasesUpdateWithoutBaseInputObjectSchema),
        z.lazy(() => RegColBasesUncheckedUpdateWithoutBaseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RegColBasesCreateWithoutBaseInputObjectSchema),
        z.lazy(() => RegColBasesUncheckedCreateWithoutBaseInputObjectSchema),
      ]),
    })
    .strict();

export const RegColBasesUpsertWithWhereUniqueWithoutBaseInputObjectSchema =
  Schema;
