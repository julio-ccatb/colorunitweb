import { z } from 'zod';
import { RegColBasesCreateManyBaseInputObjectSchema } from './RegColBasesCreateManyBaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateManyBaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RegColBasesCreateManyBaseInputObjectSchema),
      z.lazy(() => RegColBasesCreateManyBaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RegColBasesCreateManyBaseInputEnvelopeObjectSchema = Schema;
