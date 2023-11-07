import { z } from 'zod';
import { BaseUpdateWithoutRegColBasesInputObjectSchema } from './BaseUpdateWithoutRegColBasesInput.schema';
import { BaseUncheckedUpdateWithoutRegColBasesInputObjectSchema } from './BaseUncheckedUpdateWithoutRegColBasesInput.schema';
import { BaseCreateWithoutRegColBasesInputObjectSchema } from './BaseCreateWithoutRegColBasesInput.schema';
import { BaseUncheckedCreateWithoutRegColBasesInputObjectSchema } from './BaseUncheckedCreateWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUpsertWithoutRegColBasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => BaseUpdateWithoutRegColBasesInputObjectSchema),
      z.lazy(() => BaseUncheckedUpdateWithoutRegColBasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BaseCreateWithoutRegColBasesInputObjectSchema),
      z.lazy(() => BaseUncheckedCreateWithoutRegColBasesInputObjectSchema),
    ]),
  })
  .strict();

export const BaseUpsertWithoutRegColBasesInputObjectSchema = Schema;
