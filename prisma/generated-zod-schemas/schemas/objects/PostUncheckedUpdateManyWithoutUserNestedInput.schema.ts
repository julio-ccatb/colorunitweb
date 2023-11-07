import { z } from 'zod';
import { PostCreateWithoutUserInputObjectSchema } from './PostCreateWithoutUserInput.schema';
import { PostUncheckedCreateWithoutUserInputObjectSchema } from './PostUncheckedCreateWithoutUserInput.schema';
import { PostCreateOrConnectWithoutUserInputObjectSchema } from './PostCreateOrConnectWithoutUserInput.schema';
import { PostUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutUserInput.schema';
import { PostCreateManyUserInputEnvelopeObjectSchema } from './PostCreateManyUserInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutUserInput.schema';
import { PostUpdateManyWithWhereWithoutUserInputObjectSchema } from './PostUpdateManyWithWhereWithoutUserInput.schema';
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputObjectSchema),
          z.lazy(() => PostCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => PostUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PostWhereUniqueInputObjectSchema),
          z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PostWhereUniqueInputObjectSchema),
          z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PostWhereUniqueInputObjectSchema),
          z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputObjectSchema),
          z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => PostUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => PostUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PostScalarWhereInputObjectSchema),
          z.lazy(() => PostScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
