import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateWithoutUserInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date(),
  })
  .strict();

export const PostCreateWithoutUserInputObjectSchema = Schema;
