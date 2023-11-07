import { z } from 'zod';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';
import { BaseCreateWithoutRegColBasesInputObjectSchema } from './BaseCreateWithoutRegColBasesInput.schema';
import { BaseUncheckedCreateWithoutRegColBasesInputObjectSchema } from './BaseUncheckedCreateWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCreateOrConnectWithoutRegColBasesInput> = z
  .object({
    where: z.lazy(() => BaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BaseCreateWithoutRegColBasesInputObjectSchema),
      z.lazy(() => BaseUncheckedCreateWithoutRegColBasesInputObjectSchema),
    ]),
  })
  .strict();

export const BaseCreateOrConnectWithoutRegColBasesInputObjectSchema = Schema;
