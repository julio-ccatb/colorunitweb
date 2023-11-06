import { z } from 'zod';
import { ColorantCreateWithoutRegColColorantsInputObjectSchema } from './ColorantCreateWithoutRegColColorantsInput.schema';
import { ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema } from './ColorantUncheckedCreateWithoutRegColColorantsInput.schema';
import { ColorantCreateOrConnectWithoutRegColColorantsInputObjectSchema } from './ColorantCreateOrConnectWithoutRegColColorantsInput.schema';
import { ColorantWhereUniqueInputObjectSchema } from './ColorantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantCreateNestedOneWithoutRegColColorantsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ColorantCreateWithoutRegColColorantsInputObjectSchema),
          z.lazy(
            () =>
              ColorantUncheckedCreateWithoutRegColColorantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ColorantCreateOrConnectWithoutRegColColorantsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ColorantWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ColorantCreateNestedOneWithoutRegColColorantsInputObjectSchema =
  Schema;
