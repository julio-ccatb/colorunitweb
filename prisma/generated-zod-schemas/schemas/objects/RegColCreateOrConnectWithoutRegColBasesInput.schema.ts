import { z } from 'zod';
import { RegColWhereUniqueInputObjectSchema } from './RegColWhereUniqueInput.schema';
import { RegColCreateWithoutRegColBasesInputObjectSchema } from './RegColCreateWithoutRegColBasesInput.schema';
import { RegColUncheckedCreateWithoutRegColBasesInputObjectSchema } from './RegColUncheckedCreateWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCreateOrConnectWithoutRegColBasesInput> = z
  .object({
    where: z.lazy(() => RegColWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RegColCreateWithoutRegColBasesInputObjectSchema),
      z.lazy(() => RegColUncheckedCreateWithoutRegColBasesInputObjectSchema),
    ]),
  })
  .strict();

export const RegColCreateOrConnectWithoutRegColBasesInputObjectSchema = Schema;
