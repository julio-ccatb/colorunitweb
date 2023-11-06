import { z } from 'zod';
import { RegColBasesCreateManyRegColInputObjectSchema } from './RegColBasesCreateManyRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateManyRegColInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RegColBasesCreateManyRegColInputObjectSchema),
      z.lazy(() => RegColBasesCreateManyRegColInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RegColBasesCreateManyRegColInputEnvelopeObjectSchema = Schema;
