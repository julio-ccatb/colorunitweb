import { z } from 'zod';
import { BaseCreateWithoutRegColBasesInputObjectSchema } from './BaseCreateWithoutRegColBasesInput.schema';
import { BaseUncheckedCreateWithoutRegColBasesInputObjectSchema } from './BaseUncheckedCreateWithoutRegColBasesInput.schema';
import { BaseCreateOrConnectWithoutRegColBasesInputObjectSchema } from './BaseCreateOrConnectWithoutRegColBasesInput.schema';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCreateNestedOneWithoutRegColBasesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BaseCreateWithoutRegColBasesInputObjectSchema),
        z.lazy(() => BaseUncheckedCreateWithoutRegColBasesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BaseCreateOrConnectWithoutRegColBasesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BaseCreateNestedOneWithoutRegColBasesInputObjectSchema = Schema;
