import { z } from 'zod';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesUpdateWithoutBaseInputObjectSchema } from './RegColBasesUpdateWithoutBaseInput.schema';
import { RegColBasesUncheckedUpdateWithoutBaseInputObjectSchema } from './RegColBasesUncheckedUpdateWithoutBaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpdateWithWhereUniqueWithoutBaseInput> =
  z
    .object({
      where: z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RegColBasesUpdateWithoutBaseInputObjectSchema),
        z.lazy(() => RegColBasesUncheckedUpdateWithoutBaseInputObjectSchema),
      ]),
    })
    .strict();

export const RegColBasesUpdateWithWhereUniqueWithoutBaseInputObjectSchema =
  Schema;
