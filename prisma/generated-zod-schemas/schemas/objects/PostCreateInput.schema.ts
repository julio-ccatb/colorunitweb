import { z } from 'zod';
import { UserCreateNestedOneWithoutPostInputObjectSchema } from './UserCreateNestedOneWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date(),
    User: z.lazy(() => UserCreateNestedOneWithoutPostInputObjectSchema),
  })
  .strict();

export const PostCreateInputObjectSchema = Schema;
