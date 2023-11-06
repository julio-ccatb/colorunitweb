import { z } from 'zod';
import { ColorantWhereUniqueInputObjectSchema } from './ColorantWhereUniqueInput.schema';
import { ColorantCreateWithoutRegColColorantsInputObjectSchema } from './ColorantCreateWithoutRegColColorantsInput.schema';
import { ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './ColorantUncheckedCreateWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCreateOrConnectWithoutRegColColorantsInput> =
  z
    .object({
      where: z.lazy(() => ColorantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ColorantCreateWithoutRegColColorantsInputObjectSchema),
        z.lazy(
          () => ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ColorantCreateOrConnectWithoutRegColColorantsInputObjectSchema =
  Schema;
