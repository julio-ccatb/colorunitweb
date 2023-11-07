import { z } from 'zod';
import { RegColColorantsCreateWithoutRegColInputObjectSchema } from './RegColColorantsCreateWithoutRegColInput.schema';
import { RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutRegColInput.schema';
import { RegColColorantsCreateOrConnectWithoutRegColInputObjectSchema } from './RegColColorantsCreateOrConnectWithoutRegColInput.schema';
import { RegColColorantsCreateManyRegColInputEnvelopeObjectSchema } from './RegColColorantsCreateManyRegColInputEnvelope.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUncheckedCreateNestedManyWithoutRegColInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColColorantsCreateWithoutRegColInputObjectSchema),
          z
            .lazy(() => RegColColorantsCreateWithoutRegColInputObjectSchema)
            .array(),
          z.lazy(
            () => RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUncheckedCreateWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RegColColorantsCreateOrConnectWithoutRegColInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsCreateOrConnectWithoutRegColInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegColColorantsCreateManyRegColInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegColColorantsUncheckedCreateNestedManyWithoutRegColInputObjectSchema =
  Schema;
