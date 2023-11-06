import { z } from 'zod';
import { RegColColorantsCreateManyRegColInputObjectSchema } from './RegColColorantsCreateManyRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateManyRegColInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RegColColorantsCreateManyRegColInputObjectSchema),
      z.lazy(() => RegColColorantsCreateManyRegColInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RegColColorantsCreateManyRegColInputEnvelopeObjectSchema = Schema;
