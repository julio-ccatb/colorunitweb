import { z } from 'zod';
import { RegColColorantsCreateWithoutColorantInputObjectSchema } from './RegColColorantsCreateWithoutColorantInput.schema';
import { RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema } from './RegColColorantsUncheckedCreateWithoutColorantInput.schema';
import { RegColColorantsCreateOrConnectWithoutColorantInputObjectSchema } from './RegColColorantsCreateOrConnectWithoutColorantInput.schema';
import { RegColColorantsCreateManyColorantInputEnvelopeObjectSchema } from './RegColColorantsCreateManyColorantInputEnvelope.schema';
import { RegColColorantsWhereUniqueInputObjectSchema } from './RegColColorantsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUncheckedCreateNestedManyWithoutColorantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RegColColorantsCreateWithoutColorantInputObjectSchema),
          z
            .lazy(() => RegColColorantsCreateWithoutColorantInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsUncheckedCreateWithoutColorantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              RegColColorantsCreateOrConnectWithoutColorantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RegColColorantsCreateOrConnectWithoutColorantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RegColColorantsCreateManyColorantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema),
          z.lazy(() => RegColColorantsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RegColColorantsUncheckedCreateNestedManyWithoutColorantInputObjectSchema =
  Schema;
