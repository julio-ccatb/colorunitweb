import { z } from 'zod';
import { TBaseCreateWithoutBasesInputObjectSchema } from './TBaseCreateWithoutBasesInput.schema';
import { TBaseUncheckedCreateWithoutBasesInputObjectSchema } from './TBaseUncheckedCreateWithoutBasesInput.schema';
import { TBaseCreateOrConnectWithoutBasesInputObjectSchema } from './TBaseCreateOrConnectWithoutBasesInput.schema';
import { TBaseWhereUniqueInputObjectSchema } from './TBaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseCreateNestedOneWithoutBasesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TBaseCreateWithoutBasesInputObjectSchema),
        z.lazy(() => TBaseUncheckedCreateWithoutBasesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TBaseCreateOrConnectWithoutBasesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TBaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TBaseCreateNestedOneWithoutBasesInputObjectSchema = Schema;
