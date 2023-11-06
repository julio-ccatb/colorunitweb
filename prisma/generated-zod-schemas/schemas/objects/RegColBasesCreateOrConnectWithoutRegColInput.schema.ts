import { z } from 'zod';
import { RegColBasesWhereUniqueInputObjectSchema } from './RegColBasesWhereUniqueInput.schema';
import { RegColBasesCreateWithoutRegColInputObjectSchema } from './RegColBasesCreateWithoutRegColInput.schema';
import { RegColBasesUncheckedCreateWithoutRegColInputObjectSchema } from './RegColBasesUncheckedCreateWithoutRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateOrConnectWithoutRegColInput> = z
  .object({
    where: z.lazy(() => RegColBasesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RegColBasesCreateWithoutRegColInputObjectSchema),
      z.lazy(() => RegColBasesUncheckedCreateWithoutRegColInputObjectSchema),
    ]),
  })
  .strict();

export const RegColBasesCreateOrConnectWithoutRegColInputObjectSchema = Schema;
