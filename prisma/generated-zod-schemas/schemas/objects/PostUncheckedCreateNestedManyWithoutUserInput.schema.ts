import { z } from 'zod';
import { PostCreateWithoutUserInputObjectSchema } from './PostCreateWithoutUserInput.schema';
import { PostUncheckedCreateWithoutUserInputObjectSchema } from './PostUncheckedCreateWithoutUserInput.schema';
import { PostCreateOrConnectWithoutUserInputObjectSchema } from './PostCreateOrConnectWithoutUserInput.schema';
import { PostCreateManyUserInputEnvelopeObjectSchema } from './PostCreateManyUserInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputObjectSchema),
          z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
