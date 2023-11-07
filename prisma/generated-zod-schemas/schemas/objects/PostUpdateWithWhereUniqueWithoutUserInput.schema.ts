import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutUserInputObjectSchema } from './PostUpdateWithoutUserInput.schema';
import { PostUncheckedUpdateWithoutUserInputObjectSchema } from './PostUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
