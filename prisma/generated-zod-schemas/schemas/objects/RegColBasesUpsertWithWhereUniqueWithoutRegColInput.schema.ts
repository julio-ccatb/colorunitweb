import { z } from 'zod';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesUpdateWithoutRegColInputObjectSchema } from './RegColBasesUpdateWithoutRegColInput.schema';
import { RegColBasesUncheckedUpdateWithoutRegColInputObjectSchema } from './RegColBasesUncheckedUpdateWithoutRegColInput.schema';
import { RegColBasesCreateWithoutRegColInputObjectSchema } from './RegColBasesCreateWithoutRegColInput.schema';
import { RegColBasesUncheckedCreateWithoutRegColInputObjectSchema } from './RegColBasesUncheckedCreateWithoutRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpsertWithWhereUniqueWithoutRegColInput> =
  z
    .object({
      where: z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RegColBasesUpdateWithoutRegColInputObjectSchema),
        z.lazy(() => RegColBasesUncheckedUpdateWithoutRegColInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RegColBasesCreateWithoutRegColInputObjectSchema),
        z.lazy(() => RegColBasesUncheckedCreateWithoutRegColInputObjectSchema),
      ]),
    })
    .strict();

export const RegColBasesUpsertWithWhereUniqueWithoutRegColInputObjectSchema =
  Schema;
