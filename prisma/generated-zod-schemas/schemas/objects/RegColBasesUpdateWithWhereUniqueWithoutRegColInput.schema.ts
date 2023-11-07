import { z } from 'zod';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesUpdateWithoutRegColInputObjectSchema } from './RegColBasesUpdateWithoutRegColInput.schema';
import { RegColBasesUncheckedUpdateWithoutRegColInputObjectSchema } from './RegColBasesUncheckedUpdateWithoutRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpdateWithWhereUniqueWithoutRegColInput> =
  z
    .object({
      where: z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RegColBasesUpdateWithoutRegColInputObjectSchema),
        z.lazy(() => RegColBasesUncheckedUpdateWithoutRegColInputObjectSchema),
      ]),
    })
    .strict();

export const RegColBasesUpdateWithWhereUniqueWithoutRegColInputObjectSchema =
  Schema;
