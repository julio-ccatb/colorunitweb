import { z } from 'zod';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';
import { BaseCreateWithoutTbaseInputObjectSchema } from './BaseCreateWithoutTbaseInput.schema';
import { BaseUncheckedCreateWithoutTbaseInputObjectSchema } from './BaseUncheckedCreateWithoutTbaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCreateOrConnectWithoutTbaseInput> = z
  .object({
    where: z.lazy(() => BaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BaseCreateWithoutTbaseInputObjectSchema),
      z.lazy(() => BaseUncheckedCreateWithoutTbaseInputObjectSchema),
    ]),
  })
  .strict();

export const BaseCreateOrConnectWithoutTbaseInputObjectSchema = Schema;
