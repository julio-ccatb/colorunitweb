import { z } from 'zod';
import { RegColCreateWithoutRegColBasesInputObjectSchema } from './RegColCreateWithoutRegColBasesInput.schema';
import { RegColUncheckedCreateWithoutRegColBasesInputObjectSchema } from './RegColUncheckedCreateWithoutRegColBasesInput.schema';
import { RegColCreateOrConnectWithoutRegColBasesInputObjectSchema } from './RegColCreateOrConnectWithoutRegColBasesInput.schema';
import { RegColWhereUniqueInputObjectSchema } from './RegColWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColCreateNestedOneWithoutRegColBasesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RegColCreateWithoutRegColBasesInputObjectSchema),
        z.lazy(() => RegColUncheckedCreateWithoutRegColBasesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RegColCreateOrConnectWithoutRegColBasesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RegColWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RegColCreateNestedOneWithoutRegColBasesInputObjectSchema = Schema;
