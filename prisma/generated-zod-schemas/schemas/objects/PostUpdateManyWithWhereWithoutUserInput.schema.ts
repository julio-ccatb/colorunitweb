import { z } from 'zod';
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutPostInputObjectSchema } from './PostUncheckedUpdateManyWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => PostScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateManyMutationInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateManyWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const PostUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
