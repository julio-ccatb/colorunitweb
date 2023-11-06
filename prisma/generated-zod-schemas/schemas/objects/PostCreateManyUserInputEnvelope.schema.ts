import { z } from 'zod';
import { PostCreateManyUserInputObjectSchema } from './PostCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PostCreateManyUserInputObjectSchema),
      z.lazy(() => PostCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PostCreateManyUserInputEnvelopeObjectSchema = Schema;
