import { z } from 'zod';
import { RegColUpdateWithoutRegColBasesInputObjectSchema } from './RegColUpdateWithoutRegColBasesInput.schema';
import { RegColUncheckedUpdateWithoutRegColBasesInputObjectSchema } from './RegColUncheckedUpdateWithoutRegColBasesInput.schema';
import { RegColCreateWithoutRegColBasesInputObjectSchema } from './RegColCreateWithoutRegColBasesInput.schema';
import { RegColUncheckedCreateWithoutRegColBasesInputObjectSchema } from './RegColUncheckedCreateWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColUpsertWithoutRegColBasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => RegColUpdateWithoutRegColBasesInputObjectSchema),
      z.lazy(() => RegColUncheckedUpdateWithoutRegColBasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RegColCreateWithoutRegColBasesInputObjectSchema),
      z.lazy(() => RegColUncheckedCreateWithoutRegColBasesInputObjectSchema),
    ]),
  })
  .strict();

export const RegColUpsertWithoutRegColBasesInputObjectSchema = Schema;
