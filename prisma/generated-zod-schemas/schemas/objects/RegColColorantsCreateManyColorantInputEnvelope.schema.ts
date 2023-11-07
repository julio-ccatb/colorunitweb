import { z } from 'zod';
import { RegColColorantsCreateManyColorantInputObjectSchema } from './RegColColorantsCreateManyColorantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateManyColorantInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => RegColColorantsCreateManyColorantInputObjectSchema),
        z
          .lazy(() => RegColColorantsCreateManyColorantInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const RegColColorantsCreateManyColorantInputEnvelopeObjectSchema =
  Schema;
