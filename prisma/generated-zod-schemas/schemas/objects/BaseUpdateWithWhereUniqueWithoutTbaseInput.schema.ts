import { z } from 'zod';
import { BaseWhereUniqueInputObjectSchema } from './BaseWhereUniqueInput.schema';
import { BaseUpdateWithoutTbaseInputObjectSchema } from './BaseUpdateWithoutTbaseInput.schema';
import { BaseUncheckedUpdateWithoutTbaseInputObjectSchema } from './BaseUncheckedUpdateWithoutTbaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUpdateWithWhereUniqueWithoutTbaseInput> = z
  .object({
    where: z.lazy(() => BaseWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => BaseUpdateWithoutTbaseInputObjectSchema),
      z.lazy(() => BaseUncheckedUpdateWithoutTbaseInputObjectSchema),
    ]),
  })
  .strict();

export const BaseUpdateWithWhereUniqueWithoutTbaseInputObjectSchema = Schema;
