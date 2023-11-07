import { z } from 'zod';
import { BaseCreateManyTbaseInputObjectSchema } from './BaseCreateManyTbaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseCreateManyTbaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BaseCreateManyTbaseInputObjectSchema),
      z.lazy(() => BaseCreateManyTbaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BaseCreateManyTbaseInputEnvelopeObjectSchema = Schema;
