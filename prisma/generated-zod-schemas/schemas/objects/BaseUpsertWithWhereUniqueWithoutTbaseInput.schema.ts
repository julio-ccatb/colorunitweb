import { z } from 'zod';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';
import { BaseUpdateWithoutTbaseInputObjectSchema } from './BaseUpdateWithoutTbaseInput.schema';
import { BaseUncheckedUpdateWithoutTbaseInputObjectSchema } from './BaseUncheckedUpdateWithoutTbaseInput.schema';
import { BaseCreateWithoutTbaseInputObjectSchema } from './BaseCreateWithoutTbaseInput.schema';
import { BaseUncheckedCreateWithoutTbaseInputObjectSchema } from './BaseUncheckedCreateWithoutTbaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUpsertWithWhereUniqueWithoutTbaseInput> = z
  .object({
    where: z.lazy(() => BaseWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => BaseUpdateWithoutTbaseInputObjectSchema),
      z.lazy(() => BaseUncheckedUpdateWithoutTbaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BaseCreateWithoutTbaseInputObjectSchema),
      z.lazy(() => BaseUncheckedCreateWithoutTbaseInputObjectSchema),
    ]),
  })
  .strict();

export const BaseUpsertWithWhereUniqueWithoutTbaseInputObjectSchema = Schema;
