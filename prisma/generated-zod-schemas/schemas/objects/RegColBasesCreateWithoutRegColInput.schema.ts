import { z } from 'zod';
import { BaseCreateNestedOneWithoutRegColBasesInputObjectSchema } from './BaseCreateNestedOneWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateWithoutRegColInput> = z
  .object({
    amount: z.number(),
    base: z.lazy(() => BaseCreateNestedOneWithoutRegColBasesInputObjectSchema),
  })
  .strict();

export const RegColBasesCreateWithoutRegColInputObjectSchema = Schema;
