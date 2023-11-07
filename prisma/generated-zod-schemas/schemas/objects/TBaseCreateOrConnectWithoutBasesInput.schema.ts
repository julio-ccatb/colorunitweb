import { z } from 'zod';
import { TBaseWhereUniqueInputObjectSchema } from './TBaseWhereUniqueInput.schema';
import { TBaseCreateWithoutBasesInputObjectSchema } from './TBaseCreateWithoutBasesInput.schema';
import { TBaseUncheckedCreateWithoutBasesInputObjectSchema } from './TBaseUncheckedCreateWithoutBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TBaseCreateOrConnectWithoutBasesInput> = z
  .object({
    where: z.lazy(() => TBaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TBaseCreateWithoutBasesInputObjectSchema),
      z.lazy(() => TBaseUncheckedCreateWithoutBasesInputObjectSchema),
    ]),
  })
  .strict();

export const TBaseCreateOrConnectWithoutBasesInputObjectSchema = Schema;
