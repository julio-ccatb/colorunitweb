import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutUserInputObjectSchema } from './PostUpdateWithoutUserInput.schema';
import { PostUncheckedUpdateWithoutUserInputObjectSchema } from './PostUncheckedUpdateWithoutUserInput.schema';
import { PostCreateWithoutUserInputObjectSchema } from './PostCreateWithoutUserInput.schema';
import { PostUncheckedCreateWithoutUserInputObjectSchema } from './PostUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PostUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PostCreateWithoutUserInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
